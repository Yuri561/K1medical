import React from 'react';
import Chart from 'react-apexcharts';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PieChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Breathing Issues', 'Heart Conditions', 'Diabetes', 'Orthopedic Issues', 'General Checkup'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const series = [44, 55, 13, 43, 22]; // Values for each label

  return (
    <div className='container d-grid justify-content-md-center align-items-center'>
        <h1 className='text-center mt-2'>Health</h1>
      <div className="row row-cols-1 row-cols-md-2 justify-content-center align-content-center g-3">
        <div className="col  w-100 p-2">
          <Chart options={options} series={series} type="pie" width="380px" />
        </div>
        
      </div>
    </div>
  );
}

export default PieChart;
