import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,Tooltip,PointElement,LineElement,Title,ArcElement,Legend} from 'chart.js';
import {Line,Doughnut}  from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,LinearScale,Tooltip,PointElement,LineElement,Title,ArcElement,Legend
)
export const LineChart = () => {

    const labels =getLastyearlebels();
    const options ={
        responsive:true,
        plugins:{
            legend:{
             position:"bottom"
            },
            title:{
                display:true,
                text:"Yearly views"
            }
        }
    }

const data ={
    labels,
    datasets:[
        {
            label:"Views",
            data:[1,2,3],
            borderColor:"rgba(107,70,193,0.5)",
            backgroundColor:"#6b4c1"

        }
    ]
};
  return (
   <Line options={options} data={data} />
  )
}

export const DoubnutChart = () =>{


   
const data ={
    labels:["subscribed","not subscribed"],
    datasets:[
        {
            label:"Views",
            data:[3,20],
            borderColor:["blue","red"],
            backgroundColor:["blue","red"],
            borderWidth:1

        }
    ]
};

return(
    <>
    <Doughnut  data={data}/>
    </>
)
};
function getLastyearlebels(){
    const labels=[];
    const months =[
        "Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"
    ];

    const currentmonth = new Date().getMonth();
    for (let index = currentmonth; index >= 0; index--) {
        labels.unshift(months[index]);
        
    }
   return labels;
}
