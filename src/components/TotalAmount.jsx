import React, { useState } from 'react'

function TotalAmount( { totalIncome, totalExpense}) {

  const totalAmount = totalIncome - totalExpense;


  return (

    <div className='w-full max-w-sm h-auto bg-gray-500 p-5 rounded-md shadow-lg transition-all duration-300'>

      <h1 className='text-2xl text-center text-white'>Total Amount</h1>
      <br />
      <p className='text-center text-white'>
        Total: ${totalAmount.toFixed(2)}
      </p>
      
      <p className='text-center  text-white'>
        Income: ${totalIncome.toFixed(2)}
      </p>
      
      <p className='text-center  text-white'>
        Expenses: ${totalExpense.toFixed(2)}
      </p>



    </div>

  );
}

export default TotalAmount