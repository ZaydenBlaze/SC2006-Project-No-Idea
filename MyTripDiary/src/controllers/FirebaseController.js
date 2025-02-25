import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore";

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBEObzGMQ5oBnM7QTDPMx5S53YZVWkT2CI",
    authDomain: "mytripdiary-186a4.firebaseapp.com",
    databaseURL: "https://mytripdiary-186a4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mytripdiary-186a4",
    storageBucket: "mytripdiary-186a4.appspot.com",
    messagingSenderId: "1034425680288",
    appId: "1:1034425680288:web:ad71dd6aa25aaaecfaa4c5",
    measurementId: "G-QT7Z8H7N8K"
});

export const firebaseAuth = firebaseApp.auth();

export function getCurrentUserId() {
    const currentUser = firebaseAuth.currentUser;
    if (currentUser) {
        return currentUser.uid;
    } else {
        return null;
    }
}

/**
 * Verifies if the loginCredentials are correct
 * @returns {bool} true if verified else false
 */
function verifyLogin() { }

/**
 * Check if the email exists
 * @returns {bool} true if email exists else false
 */
function isExistEmail() { }

/**
 * Add a new account to the database
 * @returns {bool} true if successfully added else false
 */
function addNewAccount() { }

/**
 * Send an email to confirm registration
 * @returns {bool} true if successfully sent else false
 */
function sendRegistrationConfirmationEmail() { }

