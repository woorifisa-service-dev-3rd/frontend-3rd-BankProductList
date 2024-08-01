import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import Modal from '../../../UI/Modal';
import BankForm from '../../Form/BankForm';


const Bankbodyitem = ({ array }) => {

    const [isopen, setopen] = useState(false);
    const onClose = () => setopen(false);

    return (
        <div className='flex justify-center w-full '>

            <div className='w-5/12 mt-10 bg-blue-50 flex flex-row justify-between rounded-l-lg border-none shadow-lg'>
                <div className='p-2'>
                    <p>{array.title}</p>
                    <p className='mt-2'>{array.summary}</p>
                    <p className='hidden'>{array.category}</p>
                </div>
                <button className='rounded-r-lg bg-blue-500 w-20 text-white font-bold' onClick={() => setopen(true)}>
                    신청하기
                </button>
            </div>

            {isopen && createPortal(
                <Modal>
                    <BankForm onClose={onClose} category={array.category} />
                </Modal>
                , document.body)}
        </div>
    )
}

export default Bankbodyitem


