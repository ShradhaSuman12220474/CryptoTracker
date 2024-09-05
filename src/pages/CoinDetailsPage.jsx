import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import { useEffect } from "react";
import parse from 'html-react-parser'
import currencyStore from '../state/store'

function CoinDetailsPage(){

    const {currency} = currencyStore();

    const {coinId} = useParams();// use param hooks is created by the react router dom this helps us to fetch the dynamic part of the url which keeps on changing like in here coin id will change 

    const {data:coin,isLoading,isError,error} = useQuery(["coin",coinId], () => fetchCoinDetails(coinId),{
        cacheTime:1000*60*2,
        staleTime:1000*60*2

    });

    // useEffect(()=>{
    //     console.log(data);
    // },[data]);

    if(isLoading){
        return <div>Loading...</div>
    }

    if(isError){
        console.log("Something went wrong",error);
    }

    
    return (
        <div className="flex flex-col md:flex-row">

            <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-grey-500">

                <img 
                    src={coin?.image?.large}
                    alt={coin?.name}
                    className="h-52 mb-5" 
                />

                <h1 className="text-4xl font-bold mb-5">
                    {coin?.name}
                </h1>

                <p className="w-full px-6 py-4 text-justify">
                    {parse(coin?.description?.en)}
                </p>

                <div className="w-full flex flex-col md:flex-row md:justify-around">
                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Rank</h2>
                        <span className="ml-3 text-xl">{coin?.market_cap_rank}</span>

                    </div>
                


               
                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-yellow-400">Current Price</h2>
                        <span className="ml-3 text-xl">{(currency === 'usd')? "$ ":"₹ "}{coin?.market_data.current_price[currency]}</span>

                    </div>
                </div>
            </div>

            <div className="md:w-2/3 w-full p-6">
                Coin Information
            </div>


        </div>
    
    )

}

export default CoinDetailsPage;