import './App.css'
import Auctions from './components/active_auctions/Auctions'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Auctions></Auctions>
      <Footer></Footer>
    </>
  )
}

export default App
