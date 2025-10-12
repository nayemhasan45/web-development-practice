import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './App.css'
import { auth } from "./firebase/firebase.init";

function App() {

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => console.log(result.user))
      .catch(error => console.log(error))
  }
  const providerGithub= new GithubAuthProvider();
const handleWithGithub=()=>{
  console.log('clicked');
  signInWithPopup(auth,providerGithub)
  .then(result=>console.log(result.user))
  .catch(error=>console.log(error))
}

  return (
    <>
      <div className='text-center'>
        <h1>Vite + React</h1>
        <button onClick={handleGoogleSignIn} className='btn btn-secondary'>log in with google</button>
        <br /><br />
        <button onClick={handleWithGithub} className=" btn btn-primary">log in with github</button>
      </div>
    </>
  )
}

export default App
