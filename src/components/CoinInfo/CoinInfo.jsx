import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import {CategoryScale}  from "chart.js";
import  Chart  from "chart.js/auto";

function CoinInfo({historicData, setDays,setCoinInterval, days,currency}){
    Chart.register(CategoryScale);
    if(!historicData) return <div> <Alert message={"No data found"} type={"info"} /></div>
    return (
        <div className="flex flex-col items-center justify-center mt-6 p-6 w-full md:3/4" >
            <Line

            data= {{
                labels:historicData.prices.map(coinPrice=>{
                    let date = new Date(coinPrice[0]);// converting unix timestamp to data
                    let time = date.getHours() > 12 ?`${date.getHours()-12}:${date.getMinutes()} PM`: `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets:[
                    {
                        label:`Price (Past ${days} Days) in ${currency.toUpperCase()}`,
                        data: historicData.prices.map(coinPrice => coinPrice[1]),

                    }
                ],
            }}

            options={{
                responsive:true,
                elements:{
                    point:{
                        radius:0
                    }
                }
            }}
            
            > </Line>
        </div>
    )
};

export default CoinInfo;