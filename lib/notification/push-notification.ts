import PushNotifications from "@pusher/push-notifications-server";
const beamsClient = new PushNotifications({
  instanceId: process.env.BEAMS_INSTANCE_ID!,
  secretKey: process.env.BEAMS_SECRET_KEY!,
});
export type circular = {
  date: string;
  title: string;
  pdfLink: string;
  circularID: string;
};

export default async function sendNotification(parsedCircular: circular) {
  console.log("[sendNotification] Sending notification");
  return await beamsClient.publishToInterests(
    ["debug-vtu-alert"],
    circularToNotification(parsedCircular)
  );
}

function circularToNotification(circular: circular) {
  return {
    web: {
      notification: {
        title: "VTU Circular Update",
        body: circular.title,
      },
      data: { url: circular.pdfLink },
    },
  };
}
