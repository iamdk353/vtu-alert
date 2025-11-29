import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";
import axios from "axios";
import * as cheerio from "cheerio";
import circularModel from "@/model/circularModel";
import sendNotification from "@/lib/notification/push-notification";
type circular = {
  date: string;
  title: string;
  pdfLink: string;
  circularID: string;
};
export async function GET() {
  await connectDB();

  const updateCircular = async (
    { date, title, pdfLink, circularID }: circular,
    prevID: string | null | undefined
  ): Promise<void> => {
    await circularModel.findOneAndUpdate(
      { circularID: prevID },
      { date, title, pdfLink, circularID }
    );
  };

  try {
    // --- scraper helper ---
    async function getPdfLink(link: string) {
      const { data } = await axios.get(link);
      const $ = cheerio.load(data);
      return $(".post-attachment.mime-application-pdf a").attr("href") || "";
    }

    // --- scrape main page ---
    const url =
      process.env.MAIN_URL || "https://vtu.ac.in/en/category/administration/";

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const newCircular = $(
      ".post.type-post.status-publish.format-standard.hentry.category-administration"
    ).first();

    const circularID = newCircular.attr("id") || "";
    const circularDom = cheerio.load(newCircular.html() || "");

    const date = `${circularDom(".entry-day").text().trim()}/${circularDom(
      ".entry-month"
    )
      .text()
      .trim()}`;
    const title = circularDom(".entry-title").text().trim();
    const pdfPageLink = circularDom(".readmore a").attr("href") || "";
    const pdfLink = await getPdfLink(pdfPageLink);

    const parsedCircular = { date, title, pdfLink, circularID };

    const [storedCircular] = await circularModel.find({});

    if (!storedCircular) {
      console.log("updating a new circular to DB");
      sendNotification(parsedCircular);
      await circularModel.create(parsedCircular);
      return NextResponse.json({
        ...parsedCircular,
        new: true,
        msg: "Inserted to DB",
      });
    }

    if (parsedCircular.circularID === storedCircular.circularID) {
      return NextResponse.json({
        ...parsedCircular,
        new: false,
      });
    }

    await updateCircular(parsedCircular, storedCircular.circularID);
    sendNotification(parsedCircular);
    console.log("updated circular to DB");

    return NextResponse.json({
      ...parsedCircular,
      new: true,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check circular status" },
      { status: 500 }
    );
  }
}
