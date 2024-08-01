import React, { useState } from 'react'

const InputCategory = ({category, setcategory}) => {
    const handlingcategory = (event) => setcategory(event.target.value)

    return (
        <div className='flex justify-center font-bold mt-16 mr-10'>
            <label className="text-xl w-28">
                Category
            </label>
            <select id="category" value={category} onChange={handlingcategory}>
                <option value="Deposit">예금</option>
                <option value="Saving">적금</option>
                <option value="Loan">대출</option>
                <option value="Other">기타</option>
            </select>
        </div>

    )
}

export default InputCategory