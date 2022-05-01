import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpensesChart(props) {

  const expChartData = props.expChartData;
  
  const mthExpensesData = [expChartData.insurance, expChartData.bills, expChartData.food, expChartData.fun, expChartData.lifestyle, expChartData.others, expChartData.transport];
  const ExpenseData = {
    labels: ['insurance', 'bills', 'transport', 'food', 'fun', 'others', 'lifestyle'],
    datasets: [
      {
        label: 'Monthly Expenses Data',
        data: mthExpensesData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(109, 17, 197, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(109, 17, 197, 1)',
        ],
      },
    ],

  
  };
  const options = {
    plugins: {
      legend: {
        display: false
      },
    }
  }


  return <Doughnut data={ExpenseData} options={options}/>;
  
}

export default ExpensesChart;