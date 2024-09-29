import React, { useState } from 'react'
import IncomeModal from './Modal/IncomeModal'


const IncomeSection = ({ addIncome }) => {

  const [ShowIncomeModel, setShowIncomeModel] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);

  const handleAddIncome = (newIncome) => {

    setTotalIncome((prevIncome)=> prevIncome + newIncome.amount);
    addIncome(newIncome);
    
    }
  return (
    <div className='w-full max-w-sm h-auto  bg-gray-500 p-5 rounded-md shadowlg transaction-all duration-300'>

      <h1 className='text-2xl text-center text-white'>Income Section</h1>

      <p className='text-center mt-5 text-white'>Total Income: ${totalIncome.toFixed(2)}</p>

      <button 
        onClick={()=> setShowIncomeModel(true)}
        className="mt-5 mx-auto block p-2 bg-green-500 text-white rounded transition-transform transform hover:scale-105"  
      >
        Add Income
      </button>

      {ShowIncomeModel && (
        <IncomeModal 
              addIncome={ (newIncome) => {
                handleAddIncome(newIncome);
                setShowIncomeModel(false);
              }}

              closeModal = { ()=> setShowIncomeModel(false)}
        />
      )}

    </div>
  )
}

export default IncomeSection