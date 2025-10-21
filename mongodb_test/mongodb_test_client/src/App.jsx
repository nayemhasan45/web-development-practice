import './App.css'
import Users from './components/Users';
const usersPromise = fetch('http://localhost:3000/users').then(res=>res.json());
function App() {
  // fetch('http://localhost:5000/').then(res=>res.json()).then(data=>console.log(data));
  return (
    <>
      <h1>Vite + React</h1>
      <Users usersPromise={usersPromise}></Users>
    </>
  )
}

export default App
