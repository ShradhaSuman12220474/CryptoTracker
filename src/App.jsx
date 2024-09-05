// import { useState } from "react";

import Routing from "./components/Routing/Routing";

// import { fetchCoinData } from "./services/fetchCoinData";
// import { CurrencyContext } from "./context/currencyContext";

function App(){
  // const [currency,setCurrency] = useState('usd');
  return(
    <>
    {/* <CurrencyContext.Provider value={ {currency,setCurrency} }> */}
    
    
      <Routing/>


    {/* </CurrencyContext.Provider> */}
    </>
  )
}
export default App;