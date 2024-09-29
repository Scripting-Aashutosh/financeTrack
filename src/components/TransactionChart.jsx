// import React from 'react';
// import { Doughnut, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// // Register the components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const TransactionChart = ({ income, expense }) => {
//   const incomeData = {
//     labels: income.map((inc) => inc.name),
//     datasets: [
//       {
//         label: 'Income',
//         data: income.map((inc) => inc.amount),
//         backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
//       },
//     ],
//   };

//   const expenseData = {
//     labels: expense.map((exp) => exp.name),
//     datasets: [
//       {
//         label: 'Expense',
//         data: expense.map((exp) => exp.amount),
//         backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center mt-10">
//       <div className="w-full md:w-1/2 p-4 flex justify-center">
//         <div className='w-72 h-72 md:w-96 md:h-96'>
//           <h2 className="text-center text-2xl font-bold text-gray-700">Income Breakdown</h2>
//           <Doughnut data={incomeData} />
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 p-4 flex justify-center">
//         <div className='w-72 h-72 md:w-96 md:h-96'>
//           <h2 className="text-center text-2xl font-bold text-gray-700">Expense Breakdown</h2>
//           <Pie data={expenseData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransactionChart;



import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionChart = ({ income, expense }) => {
  // Luxurious color scheme for income
  const incomeData = {
    labels: income.map((inc) => inc.name),
    datasets: [
      {
        label: 'Income',
        data: income.map((inc) => inc.amount),
        backgroundColor: [
          'rgba(255, 223, 0, 0.6)',    // Gold
          'rgba(75, 0, 130, 0.6)',     // Indigo
          'rgba(34, 139, 34, 0.6)'     // Forest Green
        ],
        borderColor: [
          'rgba(255, 223, 0, 1)',
          'rgba(75, 0, 130, 1)',
          'rgba(34, 139, 34, 1)'
        ],
        borderWidth: 3,
        hoverOffset: 12, // Pop-out effect on hover
      },
    ],
  };

  // Luxurious color scheme for expense
  const expenseData = {
    labels: expense.map((exp) => exp.name),
    datasets: [
      {
        label: 'Expense',
        data: expense.map((exp) => exp.amount),
        backgroundColor: [
          'rgba(0, 191, 255, 0.6)',    // Deep Sky Blue
          'rgba(220, 20, 60, 0.6)',    // Crimson Red
          'rgba(128, 128, 128, 0.6)'   // Silver
        ],
        borderColor: [
          'rgba(0, 191, 255, 1)',
          'rgba(220, 20, 60, 1)',
          'rgba(128, 128, 128, 1)'
        ],
        borderWidth: 3,
        hoverOffset: 12, // Pop-out effect on hover
      },
    ],
  };

  const incomeChartOptions = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart', // Smooth easing for Doughnut chart
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bodyColor: '#fff',
        titleColor: '#fff',
        borderColor: '#777',
        borderWidth: 1,
        padding: 10,
      },
    },
    cutout: '60%', // Larger cutout for a more 3D donut feel
    maintainAspectRatio: false, // Make responsive
  };

  const expenseChartOptions = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeOutBounce', // Different easing for Pie chart
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        bodyColor: '#fff',
        titleColor: '#fff',
        borderColor: '#777',
        borderWidth: 1,
        padding: 10,
      },
    },
    maintainAspectRatio: false, // Make responsive
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10">
      {/* Income Doughnut Chart */}
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96">
          <h2 className="text-center text-2xl font-bold text-gray-700">Income Breakdown</h2>
          <Doughnut data={incomeData} options={incomeChartOptions} />
        </div>
      </div>

      {/* Expense Pie Chart */}
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96">
          <h2 className="text-center text-2xl font-bold text-gray-700">Expense Breakdown</h2>
          <Pie data={expenseData} options={expenseChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;

