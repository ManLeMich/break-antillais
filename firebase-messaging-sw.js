importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD9EarYlpDbDfPL3n7AXS0Dv8U1tyTWeR8",
  authDomain: "application-break-antillais.firebaseapp.com",
  databaseURL: "https://application-break-antillais-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "application-break-antillais",
  storageBucket: "application-break-antillais.firebasestorage.app",
  messagingSenderId: "788821898426",
  appId: "1:788821898426:web:992bc58a2f829028407e83"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notif = payload.notification || {};
  const title = notif.title || 'Break Antillais 🌴';
  const options = {
    body: notif.body || '',
    icon: 'https://breakantillais.github.io/break-antillais/icon-192.png',
    badge: 'https://breakantillais.github.io/break-antillais/icon-192.png',
    vibrate: [300, 100, 300],
    data: payload.data
  };
  return self.registration.showNotification(title, options);
});
