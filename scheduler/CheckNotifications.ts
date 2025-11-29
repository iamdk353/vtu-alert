import cron from "node-cron";
import axios from "axios";

export function startNotificationScheduler() {
  cron.schedule("*/5 * * * *", async () => {
    try {
      console.log("Cron: calling /api/notification...");
      await axios.get("/api/notification");
      console.log("Cron: success");
    } catch {
      console.error("Cron error:");
    }
  });
}
