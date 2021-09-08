import * as React from "react";
import Chart from 'react-apexcharts';

function DonutChart() {

    const mockData = {
        series: [220961, 185987, 152582],
        labels: ['1T21', '2T21', '3T21']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    

    return (
        <Chart 
            options={{ ...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="240"
        />
  );
}

export default DonutChart;
