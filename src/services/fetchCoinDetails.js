import axiosInstance from "../helper/axisInstance"


export async function fetchCoinDetails(id){
    
    try{
        const response = await axiosInstance.get(`/coins/${id}`);
        // console.log(response);
        // console.log(response.data);
        return response.data;
    }
    catch{
        console.log("failed api call");
        console.log(error.message);
        return null;
    }
}