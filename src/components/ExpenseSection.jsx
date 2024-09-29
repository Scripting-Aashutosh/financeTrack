import React from 'react'
import { useState } from 'react'
import ExpenseModal from './Modal/ExpenseModal'


const ExpenseSection = ({ addExpense}) => {

  const [showExpenseModel, setShowExpenseModel] = useState(false)
  const [totalExpense, setTotalExpense] = useState(0);


  const handleAddExpense =  (newExpense) =>{

    setTotalExpense((prevExpense)=> prevExpense + newExpense.amount);
    addExpense(newExpense);  
  };

  return (
    <div className='w-full max-w-sm h-auto  bg-gray-500 p-5 rounded-md shadow-lg transition-all duration-300'>
      
      <h1 className='text-2xl text-center text-white'>Expense Section</h1>
      
      <p className='text-center mt-5 text-white'>total Expense: ${totalExpense.toFixed(2)}</p>
      
      <button
        onClick={ () => setShowExpenseModel(true)}
        className='mt-5 mx-auto block p-2 bg-green-500 text-white rounded transition-transform transform hover:scale-105'
      >
        Add Expense
      </button>

      {showExpenseModel && (
        <ExpenseModal
            addExpense= {(newExpense) => {
              handleAddExpense(newExpense);
              setShowExpenseModel(false);
            }} 

            closeModal={ () => setShowExpenseModel(false)}
        />
      )}
    </div>
  )
}

export default ExpenseSection