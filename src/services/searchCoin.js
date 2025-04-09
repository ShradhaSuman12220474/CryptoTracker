import axiosInstance from "../helper/axisInstance";

export async function searchCoinData(value) {
    try{
    const response = await axiosInstance.get(`/search?query=${value}`)
    console.log(response);
    return response;
    }
    catch(error){
        console.log("Error in searching the coin", error);
    }

};

