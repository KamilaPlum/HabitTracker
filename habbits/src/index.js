import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./Store/store";
import {Provider} from "react-redux";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const root = ReactDOM.createRoot(document.getElementById("root"));
const firebaseConfig = {
    apiKey: "AIzaSyBbc305KSC80I8s7oLJI_8GgzVWGO0LQ9Y",
    authDomain: "habittracker-2b063.firebaseapp.com",
    projectId: "habittracker-2b063",
    storageBucket: "habittracker-2b063.appspot.com",
    messagingSenderId: "322921636802",
    appId: "1:322921636802:web:497b76a2f73bad892dac5b"
};


// Initialize Firebase
export const googleProvider = new GoogleAuthProvider();
const configurate = initializeApp(firebaseConfig);
export const db = getFirestore(configurate)
export const authFirebase = getAuth(configurate)

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
