// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA-tZ8Rh50jHVxVTkPQ1O0B24_ek6Y6HdE",
	authDomain: "aquaflow-b5a38.firebaseapp.com",
	databaseURL: "https://aquaflow-b5a38-default-rtdb.firebaseio.com",
	projectId: "aquaflow-b5a38",
	storageBucket: "aquaflow-b5a38.firebasestorage.app",
	messagingSenderId: "711852620974",
	appId: "1:711852620974:web:51cfc6b41ff9728003813f",
	measurementId: "G-BMQH1MELL0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
