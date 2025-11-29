importScripts("https://js.pusher.com/beams/service-worker.js");

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url =
    event.notification.data.url ||
    "https://vtu.ac.in/en/category/administration/";

  // Focus if already open, else open a new tab
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === url && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
