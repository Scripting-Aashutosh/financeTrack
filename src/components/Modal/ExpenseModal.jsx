import React, { useState } from 'react'

const ExpenseModal = ({ addExpense, closeModal }) => {

    const [expenseName, setExpenseName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();

        //check if the input are valid or not
        if(expenseName && amount){
            //define the newExpese object inside the handlesubmit function
            const newExpese ={
                name: expenseName,
                amount: parseFloat(amount),
                date: new Date().toLocaleDateString(),
            };

            //call the newexpense funtion passed from prop to add this new expense
            addExpense(newExpese);

            //close the model after adding income
            closeModal();
        } else{
            alert("Please fill out all fiels ⚠️⚠️");
        }
    };

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
        <div className="bg-white p-5 rounded-lg shadow-lg relative w-96">
            
            <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
                &#10005;
            </button>

            <h2 className='text-xl font-bold mb-3 text-center'>Add Expense</h2>

            <form 
                onSubmit={handleSubmit}
                className='mt-3'
            >

                <div className='mb-3'>
                    <label className='block'>Expense Name:</label>
                    <input 
                        type="text"
                        className='w-full p-2 border rounded'
                        value={expenseName}
                        onChange={ (e)=> setExpenseName(e.target.value)} 
                    />
                </div>

                <div className='mb-3'>
                    <label className='block'>Amount:</label>
                    <input 
                        type="number"
                        className='w-full p-2 border rounded'
                        value={amount}
                        onChange={ (e)=> setAmount(e.target.value)} 
                    />
                </div>

                <div className='mb-3'>
                    <label className='block'>Date:</label>
                    <input 
                        type="date"
                        className='w-full p-2 border rounded'
                        value={date}
                        onChange={ (e)=> setDate(e.target.value)} 
                    />
                </div>

                <div className='flex justify-start mt-4'>
                    
                    <button
                        type='submit'
                        className='bg-red-500 text-white p-2 rounded mr-3'
                    >
                        Add expense
                    </button>

                    <button
                        type='button'
                        className='bg-green-500 text-white p-2 rounded'
                        onClick={closeModal}
                    >
                        Cancle
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default ExpenseModal