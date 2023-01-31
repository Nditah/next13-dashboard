"use client"

import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip, 
  Legend 
} from "chart.js";

ChartJS.register(
  ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip, 
  Legend 
)

type ChartInput = {
  labels: string[];
  datasets: {
      label: string;
      data: number[];
      borderWidth: number;
      borderColor: string;
      backgroundColor: string;
  }[];
}

const BarChart = () => {

  const chartInput: ChartInput = {
    labels: [''],
    datasets: [{
      label: '',
      data: [0],
      borderWidth: 0,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgb(53, 162, 235, 0.4)'
    }]
  };
  const [chartData, setChartData] = useState(chartInput)
  const [chartOptions, setChartOptions] = useState({})

  const barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 0,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)'
    }]
  }

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Display Revenue' },
      maintainAspectRatio: false,
      responsive: true,
    },
  }

  useEffect(() => {
    setChartData(barData)
    setChartOptions(barOptions)
  }, [])


  return (
    <>
      <div className='bg-white w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg'>
            <Bar options={chartOptions} data={chartData} />
      </div>
    </>
  )
}

export default BarChart
