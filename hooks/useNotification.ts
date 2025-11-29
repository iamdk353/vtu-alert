"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useNotification() {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  useEffect(() => {
    setIsNotificationEnabled(Notification.permission === "granted");
    if (Notification.permission === "denied") {
      toast.error("Notifications are Denied , Please Enable it .");
    }
  }, []);

  const requestNotificationPermission = async () => {
    if (Notification.permission === "denied") {
      toast.error("Notifications are Denied , Please Enable it .");
      return;
    }
    try {
      const permission = await Notification.requestPermission();
      setIsNotificationEnabled(permission === "granted");
    } catch (error) {
      setIsNotificationEnabled(false);
      console.error("Error requesting notification permission:", error);
    }
  };

  return {
    isNotificationEnabled,
    requestNotificationPermission,
  };
}
