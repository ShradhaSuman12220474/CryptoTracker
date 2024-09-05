import { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import { CurrencyContext } from "../../context/currencyContext";
import currencyStore from'../../state/store';
import { useNavigate } from "react-router-dom";

function CoinTable(){
    // useEffect(()=>{
    //     console.log("useEffect Mounted")
    //     fetchCoinData();
    // },[])// second argument is the dependency array that means that on which all elements rerender this effect will be produced
    
    const[page,setPage] = useState(1);
    
    const navigate = useNavigate()
    // const {currency} =  useContext(CurrencyContext); 
    const {currency} = currencyStore();

    const {data,isLoading,isError,error} = useQuery(['coins', page,currency], () => fetchCoinData(page,currency), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    

    if(isError){
        return (
            <div>
                Error:{error.message};
                
            </div>
        )
    }


    function handleCoinRedirect(id){
        navigate(`/Details/${id}`);
         
    }
    console.log("Printing form the coin table")
    console.log(data);
    return(
        <div className="my-5 flex flex-col items-center justify-center gap-5 mx-auto w-[80vw]" >
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center" >

                <div className="basis-[35%]">
                    Coin 
                </div>

                <div  className="basis-[25%]">
                    Price ({currency =='inr'? '₹':'$'}) 
                </div>

                <div  className="basis-[20%]">
                    24h change 
                </div>

                <div  className="basis-[20%]">
                    Market Cap
                </div>

            </div>
            

            

            <div className="flex flex-col w-[80vw] mx-auto">
                    {/* now we can map on each of the coins that we have downloaded form the api call of the coingecko */}
                {data && data.map((coin)=>{
                    return (
                        <div onClick={()=>handleCoinRedirect(coin.id)} key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer">
                            
                            <div className="flex items-center justify-start gap-3 basis-[35%]">

                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full"/>
                                </div>


                                <div className="flex flex-col"> 
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>

                            </div>

                            


                            
                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>
                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>

                        </div>

                

                            
                        
                    )

                })}
            </div>

            <div className="flex gap-4 justify-center items-center">
                <div 
                onClick={()=> setPage(page-1)} 
                className="btn btn-primary btn-wide text-white text-2xl"
                disabled={page===1}>    
                    Prev
                </div>

                <div onClick={()=> setPage(page+1)}className="btn btn-secondary btn-wide text-white text-2xl">
                    Next
                </div>
            </div>

        </div>
    )
}

export default CoinTable;