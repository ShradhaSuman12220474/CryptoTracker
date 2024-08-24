import axiosInstance from "../helper/axisInstance"


export async function fetchCoinData(){
    try{
        const response = axiosInstance.get("/coins/markets?vs_currency=usd");
        console.log(response);
        return response;
    }
    catch{
        console.log(error);
        return null;
    }
}