import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAaoIe39DMjHh6LhzEs4-JZmeTwMgMrH1g",
    authDomain: "sleepytask-eca80.firebaseapp.com",
    databaseURL: "https://sleepytask-eca80.firebaseio.com",
    projectId: "sleepytask-eca80",
    storageBucket: "sleepytask-eca80.appspot.com",
    messagingSenderId: "119195353652",
    appId: "1:119195353652:web:ba13b81c1654c9709fc061",
    measurementId: "G-JL0XF8STBP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
