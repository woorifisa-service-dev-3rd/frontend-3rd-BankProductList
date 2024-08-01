import React from 'react'

const InputText = ({summary,setsummary}) => {

    const handlingsummary = (event) => setsummary(event.target.value)

    return (
        <div className='flex flex-col justify-center font-bold mt-16'>

            <label className="text-xl w-28 ml-5">
                문의 내용
            </label>
            <div className='px-5'>
                <textarea className=' w-full h-44 resize-none px-3 mt-5 border-2 border-blue-200'
                    type="text" placeholder='내용을 입력하세요' rows='4' cols='20' value={summary} onChange={handlingsummary}/>
            </div>

        </div>
    )
}

export default InputText