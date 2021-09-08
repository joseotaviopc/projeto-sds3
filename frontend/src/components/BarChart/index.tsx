import * as React from "react";
import Chart from 'react-apexcharts';

function BarChart() {

    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago']
        },
        series: [
            {
                name: "R$ (mil)",
                data: [111.8, 32.7, 76.5, 46.2, 73.5, 66.3, 57.8, 52.1]                   
            }
        ]
    };

    return (
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
  );
}

export default BarChart;
