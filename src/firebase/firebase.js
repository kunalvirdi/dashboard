import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyA6Lxd02V1ykgzdd8108ebPZyw1EQzDDEA",
	authDomain: "dashboard-52e0c.firebaseapp.com",
	projectId: "dashboard-52e0c",
	storageBucket: "dashboard-52e0c.appspot.com",
	messagingSenderId: "703994492966",
	appId: "1:703994492966:web:60102f4c8136742ce5cee7",
	measurementId: "G-PV1EM8SP6Q"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();