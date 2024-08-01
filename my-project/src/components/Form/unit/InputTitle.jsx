import React, { useState } from 'react'

const InputTitle = ({title, settitle}) => {

    const titlehandling = (event)=>settitle(event.target.value)

    return (
        <div className='flex justify-center font-bold mt-10'>
            <label className="text-xl w-28">
                Title
            </label>
            <input type="text" placeholder='Title을 입력하세요' value={title} onChange={titlehandling}/>
        </div>
    )
}

export default InputTitle