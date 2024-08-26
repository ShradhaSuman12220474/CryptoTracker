import { useState } from "react";
import Banner from "./components/Banner/Banner";
import CoinTable from "./components/CoinTable/CoinTable";
import Navbar from "./components/Navbar/Navbar";
import { fetchCoinData } from "./services/fetchCoinData";

function App(){
  const [currency,setCurrency] = useState('usd');
  return(
    <>
    <Navbar setCurrency={setCurrency}/>
    <Banner />
    <CoinTable currency={currency}/>
    
    </>
  )
}
export default App;