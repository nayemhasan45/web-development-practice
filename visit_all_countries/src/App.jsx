import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/Countries';

const fetchCountries = async () => {
  const res = await fetch('https://restcountries.com/v3.1/independent?status=true');
  return (res.json())
}

function App() {
  const getCountries = fetchCountries();
  return (
    <>
      <Suspense fallback={ <h1>Let's gooooo visit all the countries</h1> }>
        <Countries getCountries={getCountries}></Countries>
      </Suspense>
    </>
  )
}

export default App
