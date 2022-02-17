import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQHEfKqVO4LliWUYBxhbX6RJDN8TKZuJQ",
    authDomain: "yamak-job-task.firebaseapp.com",
    projectId: "yamak-job-task",
    storageBucket: "yamak-job-task.appspot.com",
    messagingSenderId: "1038168738872",
    appId: "1:1038168738872:web:3ebcad9fe8fd9ebad06acd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
