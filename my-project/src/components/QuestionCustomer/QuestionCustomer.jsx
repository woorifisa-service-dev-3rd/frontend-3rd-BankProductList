import React, { useState } from 'react'



const QuestionCustomer = ({ setCurrentPage, currentPage }) => {

  const [isOpen, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const changePageHandler = () => {
    if (currentPage === 'questionCustomer') {
      setCurrentPage('bankMain')
    } else {
      setCurrentPage('questionCustomer')
    }
  }

  return (
    <div >

      <div className='flex justify-between p-6 bg-blue-500'>

        <h1 className='font-bold text-4xl border-none text-white'>
          {new Date().toDateString()} </h1>

        <button className='cursor-pointer ml-10 text-base font-bold border-2 border-white rounded
         bg-blue-500 p-2 hover:bg-blue-700 text-white' onClick={changePageHandler}>
          {currentPage === 'questionCustomer' ? '메인페이지로 돌아가기' : '문의 사항'}
        </button>


        {/* <button type='button' className='text-white' onClick={addUpdateHandler}>{isNewForm(children) ? '등록하기' : '저장하기'}</button> */}

      </div>


    </div>



  )
}

export default QuestionCustomer