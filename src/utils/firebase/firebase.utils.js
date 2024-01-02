import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, 
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBTI2oJx9rqt-iV-BDzj55pVHisCvcSpu8",
  
    authDomain: "cloting-db-e0271.firebaseapp.com",
  
    projectId: "cloting-db-e0271",
  
    storageBucket: "cloting-db-e0271.appspot.com",
  
    messagingSenderId: "1054748105845",
  
    appId: "1:1054748105845:web:c200c367ca2d44a4ecec3c"
  
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const db = getFirestore();

// upload data to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

   await batch.commit();
   console.log('data uploaded');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const  categorYMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categorYMap;

}


export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutAuthUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
}