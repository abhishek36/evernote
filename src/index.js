import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
var firebaseConfig = {
  apiKey: "AIzaSyCm_7_MTGwpQTa8fg4vkCDIUdRtBnsFGKE",
  authDomain: "evernote-1939a.firebaseapp.com",
  projectId: "evernote-1939a",
  storageBucket: "evernote-1939a.appspot.com",
  messagingSenderId: "285205193499",
  appId: "1:285205193499:web:06002b1e312670baf4e9be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
