'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphDis = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '2017',
            data: [65, 59, 80, 81, 56, 55, 40, 45, 70, 75, 85, 90],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
          },
          {
            label: '2015 & 2016',
            data: [45, 49, 60, 61, 46, 45, 30, 35, 50, 55, 65, 70],
            fill: false,
            backgroundColor: 'rgba(153,102,255,0.2)',
            borderColor: 'rgba(153,102,255,1)',
          },
          {
            label: '2014',
            data: [35, 39, 50, 51, 36, 35, 20, 25, 40, 45, 55, 60],
            fill: false,
            backgroundColor: 'rgba(255,159,64,0.2)',
            borderColor: 'rgba(255,159,64,1)',
          },
        ],
      };
    
      const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Line Chart Example',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
  return (
    <div className="flex justify-center items-center ">
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  </div>
  )
}

export default GraphDis