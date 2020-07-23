import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCmUyG0XKOwMzbsQyIodYdq3WajoSOPYpM",
  authDomain: "evernote-clone-4dde5.firebaseapp.com",
  databaseURL: "https://evernote-clone-4dde5.firebaseio.com",
  projectId: "evernote-clone-4dde5",
  storageBucket: "evernote-clone-4dde5.appspot.com",
  messagingSenderId: "255801316644",
  appId: "1:255801316644:web:fe3d52cf8c18c2052ccfb1",
  measurementId: "G-DE0TEDLTSG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
