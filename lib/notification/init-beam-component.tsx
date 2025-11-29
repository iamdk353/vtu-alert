"use client";
import { useEffect } from "react";
import { toast } from "sonner";

export default function BeamsInit({
  setSuccessSubscription,
}: {
  setSuccessSubscription: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    console.log("[BeamsInit] Component mounted");
    if (localStorage.getItem("beams-subscribed") === "true") {
      setSuccessSubscription(true);
      return;
    }

    if (typeof window === "undefined") return;
    console.log("[BeamsInit] window detected");

    const interval = setInterval(async () => {
      console.log("[BeamsInit] Checking for SDK...");

      if (!window.PusherPushNotifications) {
        console.log("[BeamsInit] ❌ SDK not loaded");
        return;
      }

      console.log("[BeamsInit] ✅ SDK loaded");
      clearInterval(interval);

      try {
        console.log("[BeamsInit] Registering SW...");
        const registration = await navigator.serviceWorker.register(
          "/beams-sw.js"
        );

        console.log("[BeamsInit] SW Registered", registration);

        const beamsClient = new window.PusherPushNotifications.Client({
          instanceId: "8fa9288a-0bff-4ac2-8a3f-3aaa7f91f9f1",
          serviceWorkerRegistration: registration,
        });

        console.log("[BeamsInit] Client created");

        await beamsClient.start();
        console.log("[BeamsInit] Client started");

        // >>> REQUIRED <<<
        await beamsClient.addDeviceInterest("debug-vtu-alert");
        console.log("[BeamsInit] Device subscribed to 'debug-vtu-alert'");

        const id = await beamsClient.getDeviceId();
        console.log("[BeamsInit] Device ID:", id);
        toast.success("Subscribed to notifications");
        setSuccessSubscription(true);
        // add local storage
        localStorage.setItem("beams-subscribed", "true");
      } catch (err) {
        toast.error(
          "Failed to subscribe to notifications, try it in chrome browser."
        );
        console.error("[BeamsInit] ❌ ERROR:", err);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}
