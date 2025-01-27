/* eslint-disable */
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Title);


const LineChart = ({ data }) => {


  // Calculate running average
  const runningAverage = [];
  let total = 0;
  data.forEach((item, index) => {
    total += 60000 / item.takenTime;
    runningAverage.push(total / (index + 1));
  });

  // Chart.js data configuration
  const chartData = {
    labels: data.map((item) => ""), // Dates on x-axis
    datasets: [
      {
        label: "QPM (Test Results)",
        data: data.map((item) => 60000 / item.takenTime), // Individual test WPM values
        pointRadius: 2  ,
        pointBackgroundColor: "#139a34",
        borderWidth: 0, // Points only, no line
        showLine: false, // Only show points
      },
      {
        label: "Running Average",
        data: runningAverage, // Running average line
        borderColor: "#122454",
        backgroundColor: "rgba(255, 255, 0, 0.1)", // Optional fill
        tension: 0.5, // Smooth curve
        fill: false,
        borderWidth:1,
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "nearest",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "QPM (Questions Per Minute)",
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
