import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import Layout from "../../pages/Layout";

function Routing(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index  element={<Home/>}/>  {/*path="/" -> this is the alternate of index */}
                <Route path="/Details/:coinId" element={<CoinDetailsPage />}/> {/*this will be rendered in place of outlet in layout component*/}

            
            </Route>
                
        
        </Routes>
        </>
    )
}

export default Routing;