// import { useState } from "react";
import Banner from "./components/Banner/Banner";
import CoinTable from "./components/CoinTable/CoinTable";
import Navbar from "./components/Navbar/Navbar";
// import { fetchCoinData } from "./services/fetchCoinData";
// import { CurrencyContext } from "./context/currencyContext";

function App(){
  // const [currency,setCurrency] = useState('usd');
  return(
    <>
    {/* <CurrencyContext.Provider value={ {currency,setCurrency} }> */}
    
    
    <Navbar />
    <Banner />
    <CoinTable/>


    {/* </CurrencyContext.Provider> */}
    </>
  )
}
export default App;