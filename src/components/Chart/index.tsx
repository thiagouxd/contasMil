import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  generateValuesOfTheDay,
  generateValuesOfTheMonth,
} from "../../utils/daysInTheMonth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const Chart = (props: any) => {
  const labels = props.data.map((item: any) => item.day);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: generateValuesOfTheMonth(props.totalValue),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: generateValuesOfTheDay(props.totalValue, props.dailyExpenses),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Chart;
