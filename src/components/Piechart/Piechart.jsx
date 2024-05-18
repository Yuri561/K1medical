import React from 'react';
import Chart from 'react-apexcharts';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PieChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Breathing', 'Heart', 'Diabetes', 'Orthopedic', 'General'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 280,
        },
        legend: {
          position: 'bottom',
          fontSize: '10px', // Adjust font size of the legend
        },
      },
    }],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + "%"; // Ensuring the percentage is formatted correctly
      },
      style: {
        fontSize: '10px', // Adjusting font size
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.45,
      },
    },
    legend: {
      position: 'bottom', // Positioning legend on the right
      fontSize: '10px', // Adjusting font size
   
    },
  };

  const series = [44, 55, 13, 43, 22]; // Values for each label

  return (
    <div className="pie-wrapper text-center"
    style={{height: '16rem'}}>
    <div className='container'>
      <h3 className='text-center mt-2'>Health</h3>
      <div className="row  row-cols-md-2 justify-content-center align-content-center g-3">
        <div className="col w-100">
          <Chart options={options} series={series} type="donut" width="280px" />
        </div>
      </div>
    </div>

    </div>
  );
}

export default PieChart;
