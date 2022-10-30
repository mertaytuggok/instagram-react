import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { userHandle } from "Utils";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, " users", user.uid));

    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});

//--------------------Login----------------------
export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
};

export const getUserInfo = async (uname) => {
  const username = await getDoc(doc(db, "usernames", uname));
  if (username.exists()) {
    return (await getDoc(doc(db, "users", username.data().user_id))).data();
  } else {
    toast.error("Kullanıcı Bulunamadı!");
    throw new Error("Kullanıcı Bulunamadı!");
  }
};

//-----------------Register----------------------
export const register = async ({ email, password, full_name, username }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));
    if (user.exists()) {
      toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`);
    } else {
      const responce = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (responce.user) {
        await setDoc(doc(db, "usernames", username), {
          user_id: responce.user.uid,
        });
        await setDoc(doc(db, "users", responce.user.uid), {
          full_name: full_name,
          username: username,
          followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          gender: "",
          posts: 0,
        });
        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });

        return responce.user;
      }
    }
  } catch (error) {
    toast.error(error.code);
  }
};

//-------------------Logout----------------------
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};
