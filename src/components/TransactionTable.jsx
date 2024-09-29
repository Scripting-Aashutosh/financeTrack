import React, { useState, useEffect } from 'react';
import TransactionChart from './TransactionChart';

const TransactionTable = ({ income, expense }) => {
  const [animationClass, setAnimationClass] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (income.length > 0 || expense.length > 0) {
      setAnimationClass('animate-fadeIn');
      const timer = setTimeout(() => setAnimationClass(''), 1000); // Reset animation after it plays
      return () => clearTimeout(timer);
    }
  }, [income, expense]);

  return (
    <div className="transaction-table mt-10 mx-auto w-full">
      
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-700">Transactions</h2>

      {/* Responsive Table without Scrollbar */}
      <div 
        className="w-full shadow-2xl rounded-lg overflow-hidden"
        tabIndex={0} 
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}
      >
        <table className="min-w-full bg-white rounded-lg table-auto transform hover:scale-105 transition-transform duration-300">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <tr>
              <th className="px-4 py-4 text-left">Type</th>
              <th className="px-4 py-4 text-left">Name</th>
              <th className="px-4 py-4 text-left">Amount</th>
              <th className="px-4 py-4 text-left">Date</th>
              {isFocused && <th className="px-4 py-4 text-left">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {income.map((inc, index) => (
              <tr
                key={index}
                className={`${animationClass} bg-green-50 hover:bg-green-100 transition-colors duration-300`}
              >
                <td className="border px-4 py-4">Income</td>
                <td className="border px-4 py-4">{inc.name}</td>
                <td className="border px-4 py-4">${inc.amount.toFixed(2)}</td>
                <td className="border px-4 py-4">{inc.date}</td>
                {isFocused && (
                  <td className="border px-4 py-4">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 mr-2">
                      Update
                    </button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
            {expense.map((exp, index) => (
              <tr
                key={index}
                className={`${animationClass} bg-red-50 hover:bg-red-100 transition-colors duration-300`}
              >
                <td className="border px-4 py-4">Expense</td>
                <td className="border px-4 py-4">{exp.name}</td>
                <td className="border px-4 py-4">${exp.amount.toFixed(2)}</td>
                <td className="border px-4 py-4">{exp.date}</td>
                {isFocused && (
                  <td className="border px-4 py-4">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 mr-2">
                      Update
                    </button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TransactionChart income={income} expense={expense} />

    </div>
  );
};

export default TransactionTable;
