import React, { createContext, useState, useEffect } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import app from '../../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);
    const createUser = (email, password) => {
        setloading(true)

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const providerLogin = (provider) => {
        setloading(true)
        return signInWithPopup(auth, provider);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);

    }
    const logout = () => {
        setloading(true)
        return signOut(auth);

    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setloading(false);

        });
        return () => {
            unsubscribe();

        }
    })
    const authInfo = {
        user,
        loading, createUser, signIn, providerLogin, logout, loading, updateUserProfile

    }



    return (

        < AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );

}
export default AuthProvider;