/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider ,
   onAuthStateChanged, signInWithPopup,
    signOut, createUserWithEmailAndPassword ,
    signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";

import { useLocation, useNavigate } from 'react-router-dom';
import initAuthentication from '../page/Firebase/Firebase-init';

initAuthentication();


const useFirebase = () => {
const provider = new GoogleAuthProvider();
const auth = getAuth();
const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [error,setError] = useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [displayName,setDisplayName]=useState("");

const location = useLocation();
const navigate = useNavigate();
const redirect_uri = location.state?.from || '/';

const signInUsingGoogle =()=>{
  return  signInWithPopup(auth,provider)
   .catch(error => {
     setError(error.message);
     });
 }

//  here start email authentication

  //create user
  const registerUser = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if(userCredential.user){
          navigate( redirect_uri);
          console.log(userCredential.user.accessToken);
        }
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to database
        saveUser(email, name);
        //send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
         

      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

 //login user
 const loginUser = (email, password) => {
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       if(userCredential.user){
          navigate( redirect_uri);
        }
      setError("");
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => setIsLoading(false));
};


//  here use ing logout
 const logOut = ()=>{
  setIsLoading(true);
   signOut(auth)
   .then(()=>{
     setUser({})
   })
   .catch((error) => {
    // An error happened.
  })
  .finally(() => setIsLoading(false));
 }

// observer user state
useEffect(() => {
  const unsubscribed = onAuthStateChanged(auth, (user) => {
    if (user) {
      getIdToken(user)
      .then(idToken => localStorage.setItem('idToken', idToken));
      setUser(user);
    } else {
      setUser({});
    }
    setIsLoading(false);
  });
  return () => unsubscribed;
}, [auth]);

 //save user info to database
 const saveUser = (email, name) => {
  const user = { email, name };
  fetch("https://whispering-thicket-90342.herokuapp.com/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then();
};
const saveUser2 = (email,displayName)=>{
  const user = {email, displayName};
  fetch('https://whispering-thicket-90342.herokuapp.com/users',{
    method: "PUT",
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(user)
  })
 }
  return{
signInUsingGoogle,loginUser,registerUser,
logOut,
user,error,setUser,setError,
email,password,displayName,saveUser,saveUser2
  };
};

export default useFirebase;