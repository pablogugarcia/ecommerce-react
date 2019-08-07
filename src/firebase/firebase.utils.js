import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {claveFirebase} from './claves.firebase';

// const config = claveFirebase;

firebase.initializeApp(claveFirebase);

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' }); // hay varios popup, usamos uno solo
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // Check si el usuario existe en la db 
    if (!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }

    }
    return userRef;

}

