import Calculator from './Calculator'
import './App.css'
import ShowText from './ShowText'
import Friends from './Friends'
import { Suspense } from 'react'


// const loadUsers  =  fetch('https://jsonplaceholder.typicode.com/users')
// .then (res=>res.json())
const loadUsers= async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return(res.json())
}


function App() {

  const loadUsersPromise = loadUsers();


  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={ <h1>Friends are coming ....</h1> }>
        <Friends users={loadUsersPromise}></Friends>
      </Suspense>




      <ShowText name="nayem"></ShowText>
      <Calculator></Calculator>
    </>
  )
}

export default App
