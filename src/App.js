import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const GoogleProvider = new GoogleAuthProvider();
  const provider = new GithubAuthProvider();
  const handeler = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handelers = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  const githubhandle=()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user;
      setUser(user)
      console.log(user);
    })
  }
  return (
    // {
    //    condition ?true:false
    // }
    <div className="App">
      {user.uid ? (
        <>
          <button onClick={handelers}>Sing Out</button>
          
        </>
      ) : (
        <>
          <button onClick={handeler}>Sing In</button>
          <button onClick={githubhandle}>Github sing in</button>
        </>
      )}

      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
