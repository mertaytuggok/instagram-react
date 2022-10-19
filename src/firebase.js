import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";
import { userHandle } from "Utils";

const firebaseConfig = {
  apiKey: "AIzaSyDA-axtTZq3whLmlN34G6X38e7B0WUAMvQ",
  authDomain: "instagram-react-49d8b.firebaseapp.com",
  projectId: "instagram-react-49d8b",
  storageBucket: "instagram-react-49d8b.appspot.com",
  messagingSenderId: "1088301944309",
  appId: "1:1088301944309:web:0c2ac11462b5f0dd82e4bc",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    const responce = await signInWithEmailAndPassword(auth, email, password);
    console.log(responce.user);
  } catch (error) {
    toast.error(error.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};
