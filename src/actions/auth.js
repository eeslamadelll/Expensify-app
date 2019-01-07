import { firebase, googleProvider } from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleProvider);
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}