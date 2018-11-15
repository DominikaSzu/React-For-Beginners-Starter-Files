import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4iJMoggAIk3cgcvGMq5f3KqjYtBAqPpE",
    authDomain: "catch-of-the-day-doszuk.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-doszuk.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
