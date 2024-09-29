import React from 'react'
import { useState } from 'react'


const IncomeModal = ( { addIncome, closeModal }) => {

    const [incomeName, setIncomeName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        //check if inpute are valid or not
        if(incomeName && amount){
            //define the newIncome object inside the handleSubmit function
            const newIncome ={
                name: incomeName,
                amount: parseFloat(amount), //make sure that it convert into number
                date: new Date().toLocaleDateString(), //add the date of transaction
            };

            //call the addIncome function passed from prop to add this new income
            addIncome(newIncome);

            //close the model after adding income
            closeModal();
        } else{
            alert("Please fill out all fields ⚠️⚠️");
        }
    };


  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
        <div className='bg-white p-5 rounded-lg shadow-lg relative w-96'>
            
            <button
                onClick={closeModal}
                className='absolute top-2 right-2 text-grey-500 hover:text-gray-700'
            >&#10005;
            </button>

            <h2 className='text-xl font-bold mb-3 text-center'>Add Income</h2>
            
            <form
                onSubmit={handleSubmit}
                className='mt-3'
            >

                <div className='mb-3'>
                    <label className='block'>Income Name:</label>
                    <input 
                        type="text" 
                        className='w-full p-2 border rounded'
                        value={incomeName}
                        onChange={ (e) => setIncomeName(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label className='block'>Amount: </label>
                    <input 
                        type="number"
                        className='w-full p-2 border rounded'
                        value={amount}
                        onChange={ (e) => setAmount(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label className='block'>Date:</label>
                    <input 
                        type="date"
                        className='w-full p-2 border rounded'
                        value={date}
                        onChange ={ (e) => setDate(e.target.value)} 
                    />
                </div>

                <div className='flex justify-start mt-4'>
                    
                    <button
                        type='submit'
                        className='bg-red-500 text-white p-2 rounded mr-3'
                    >
                        Add Income
                    </button>

                    <button
                        type='button'
                        className='bg-green-500 text-white p-2 rounded'
                        onClick={closeModal}
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default IncomeModal