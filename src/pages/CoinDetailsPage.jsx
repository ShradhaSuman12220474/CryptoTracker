import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../services/fetchCoinDetails";

function CoinDetailsPage(){

    const {coinId} = useParams();// use param hooks is created by the react router dom this helps us to fetch the dynamic part of the url which keeps on changing like in here coin id will change 

    const {data,isLoading,isError,error} = useQuery(['coins',coinId], () => fetchCoinDetails(coinId), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    
    return (
        <>
       
        <h1>Coins Detail Page</h1>
        {data}
        
        </>
    
    )

}

export default CoinDetailsPage;