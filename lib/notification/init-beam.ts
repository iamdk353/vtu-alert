import * as PusherPushNotifications from "@pusher/push-notifications-web";

const beamsClient = new PusherPushNotifications.Client({
  instanceId: process.env.BEAMS_INSTANCE_ID!,
});

async function initBeams() {
  try {
    await beamsClient.start();
    const deviceId = await beamsClient.getDeviceId();
    console.log("Successfully registered. Device ID:", deviceId);
  } catch (err) {
    console.error("Beams error:", err);
  }
}

initBeams();
