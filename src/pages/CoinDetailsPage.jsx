import { useParams } from "react-router-dom";

function CoinDetailsPage(){

    const {coinId} = useParams();// use param hooks is created by the react router dom this helps us to fetch the dynamic part of the url which keeps on changing like in here coin id will change 
    return (
        <>
       
        <h1>Coins Detail Page</h1>
        {coinId}
        
        </>
    
    )

}

export default CoinDetailsPage;