import React from 'react'
import { Line } from "react-chartjs-2";
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);

export const PerformanceChart = () => {
    const data={
        labels:["Sem-1","Sem-2","Sem-3","Sem-4","Sem-5","Sem-6","Sem-7","Sem-8"],
        datasets:[
            {
                data:[7.31,7.87,7.48,7.42,7.60,8.10,8.57,10.00],
                borderColor:"green",
                label:"Graduation"
            }
        ]
    }
    return (    
        <div className='chart'>
            <Line data={data} style={{backgroundColor:'black'}} options={{maintainAspectRatio:false}} height={70}/>
        </div>
  )
}
