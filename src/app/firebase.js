import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8y-G0pP2Y9rsvh9wBL3g4E-CW9QpUs24",
  authDomain: "tesla-clone-smp.firebaseapp.com",
  projectId: "tesla-clone-smp",
  storageBucket: "tesla-clone-smp.appspot.com",
  messagingSenderId: "855230201923",
  appId: "1:855230201923:web:838e30e008f63766d4d4f6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
