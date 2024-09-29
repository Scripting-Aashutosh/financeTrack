import React, { useState } from 'react'
import ExpenseSection from './components/ExpenseSection'
import IncomeSection from './components/IncomeSection'
import TotalAmount from './components/TotalAmount'
import TransactionTable from './components/TransactionTable'



const App = () => {

  const [income, setIncome] = useState([]); 
  const [expense, setExpense] = useState([]); 

  const addIncome = (newIncome) => {
    setIncome([...income, newIncome]);
  }

  const addExpense = (newExpense) =>{
    setExpense([...expense, newExpense]);
  };

  const totalIncome = income.reduce((total, income) => total + income.amount, 0);
  const totalExpense = expense.reduce((total, expense) => total + expense.amount, 0);


  return (
    <div className='max-w-screen-lg mx-auto p-4'>
      <h1 className='text-center text-3xl font-bold'>Finance-Tracker <span><i class="ri-currency-fill"></i></span></h1>
      <br />
      <div className='flex flex-col md:flex-row justify-between gap-4'>
      <TotalAmount totalIncome={totalIncome} totalExpense={totalExpense}/>
      <IncomeSection addIncome={addIncome} />
      <ExpenseSection addExpense={addExpense} totalExpenses={totalExpense} />
      </div>

      <TransactionTable income={income} expense={expense} />
    </div>


  )
}

export default App


