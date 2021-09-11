import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

function BarChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {
      const data = response.data as SaleSuccess[];
      const myLabels = data.map((x) => x.sellerName);
      const mySeries = data.map((x) => round((100 * x.deals) / x.visited, 2));

      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: "R$ em milhares",
            data: mySeries,
          },
        ],
      });
      // console.log(chartData);
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  };

//   const mockData = {
//     labels: {
//       categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"],
//     },
//     series: [
//       {
//         name: "R$ (mil)",
//         data: [111.8, 32.7, 76.5, 46.2, 73.5, 66.3, 57.8, 52.1],
//       },
//     ],
//   };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;
