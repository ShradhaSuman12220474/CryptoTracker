import { Route, Routes } from "react-router-dom";
// import Home from "../../pages/Home";
// import CoinDetailsPage from "../../pages/CoinDetailsPage";
import Layout from "../../pages/Layout";
import { lazy, Suspense } from "react";
import PageLoader from "../PageLoader/PageLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";


const Home = lazy(()=>import("../../pages/Home"));
const CoinDetailsPage = lazy(()=>import("../../pages/CoinDetailsPage"));

function Routing(){
    return (
        <>
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index  element={
                        <Suspense fallback={<PageLoader/>}> <Home/> </Suspense>
                    }/>  {/*path="/" -> this is the alternate of index */}
                    
                    <Route path="/Details/:coinId" element={
                        <Suspense fallback={<PageLoader/>}> <CoinDetailsPage/> </Suspense>
                    }/> {/*this will be rendered in place of outlet in layout component*/}

                
                </Route>
                    
            
            </Routes>
        </CustomErrorBoundary>
        
        </>
    )
}

export default Routing;