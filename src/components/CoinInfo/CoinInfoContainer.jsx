import { useQuery } from "react-query";
import CoinInfo from "./CoinInfo";
import { fetchCoinHistoricData } from "../../services/fetchCoinHIstoricData";
import { useState } from "react";
import currencyStore from "../../state/store";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";


function CoinInfoContainer({coinId}){

    //making an api call to get the coin info
    const [days,setDays] = useState(7);
    const [interval, setCoinInterval] = useState('');

    const {currency} = currencyStore();
    
    const {data: historicData, isError, isLoading} = useQuery(['coinHistoricData', coinId,currency, days, interval],()=> fetchCoinHistoricData(coinId, interval,currency,days),{
        cacheTime:1000*60*2,
        staleTime:1000*60*2
    })

    if(isLoading){
        return <PageLoader/>

    }
    if(isError){
        return <Alert message='alert fetching the data' type="error"/>
    }
    return (
        <CoinInfo 
            historicData={historicData} 
            setDays={setDays} 
            setInterval={setCoinInterval} 
            days={days}
            currency={currency}
        />
    )
};

export default CoinInfoContainer;