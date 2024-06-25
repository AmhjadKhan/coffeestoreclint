import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app)

export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   
    // create user 
    const createUser = (email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
  }

   // 2.  user login section 
 useEffect(()=>{
  const unsubscrive = onAuthStateChanged(auth, currentUser =>{
     // console.log('user state change', currentUser)
     setUser(currentUser)
     setLoading(false)
   });
   return ()=>{
     unsubscrive();
   }
},[])

//  3.logout 
const logOutsec = () =>{
 setLoading(true)
   return signOut(auth)
}

    const userInfo ={
       user,
       loading,
       createUser,
       signInUser,
       logOutsec
    }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider
