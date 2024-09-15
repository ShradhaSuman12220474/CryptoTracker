import axiosInstance from "../helper/axisInstance";


export async function fetchCoinHistoricData (id, interval, currency = 'usd', days = 7 ){
    try{
        const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        return response.data;
    }
    catch(error){

    }
}