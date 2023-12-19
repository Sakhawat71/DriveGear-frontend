import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true);

    // sign up with email password
    const signUpWithEmailPass = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign with google auth
    const signWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    } 

    // login email pass
    const loginEmailPass = (email ,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // manage user
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unSubscriber();
    },[])

    //logout
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        signUpWithEmailPass,
        signWithGoogle,
        loginEmailPass,
        user,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node,
};

export default AuthProvider;