import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";


export const AuthContext = createContext(null)


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser ] = useState(null);

    const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }

   //update profile 
   const updateUserProfile = (fullName, image) => {
   return updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: image
      })
   }

   const login = (email, password) => {
    setLoading(true);
      return signInWithEmailAndPassword( auth, email, password);
   }

   

   const logOut = () => {
    setLoading(true);
    return signOut(auth)
}
   useEffect( () => {
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        console.log('User in auth state change', currentUser);
        setUser(currentUser);
        setLoading(false);
     });
     return () => {
        unSubscribe();
     }
   }, [])
    const authInfo = {
        user, 
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile,
        setUser 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;