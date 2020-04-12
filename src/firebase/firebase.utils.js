import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDC9tABPJjsAyNxExyEYLog-edzWyVOFys",
    authDomain: "crwn-db-46680.firebaseapp.com",
    databaseURL: "https://crwn-db-46680.firebaseio.com",
    projectId: "crwn-db-46680",
    storageBucket: "crwn-db-46680.appspot.com",
    messagingSenderId: "845200865169",
    appId: "1:845200865169:web:0dfec967a391eded394c30"
};

export const createUserProfileDocument = async (userAuth, data) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// const facebook_provider = new firebase.auth.FacebookAuthProvider;
provider.setCustomParameters({ prompt: "select_account" });
// facebook_provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export const signInWithFaceBook = () => auth.signInWithPopup(provider).then(function (result) {
//     var token = result.credential.accessToken;
//     console.log("token ", token);
//     var user = result.user;
//     console.log("user ", user);
// }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
// });

export default firebase;