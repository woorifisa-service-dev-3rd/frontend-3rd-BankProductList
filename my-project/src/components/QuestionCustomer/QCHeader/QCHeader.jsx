import React, { useState } from 'react'
import QCHeaderFilter from './QCHeaderFilter';
import { createPortal } from 'react-dom';
import Modal from '../../../UI/Modal';
import QuestionCustomerForm from './../QuestionCustomerForm';

const QCHeader = ({ onAdd, onFilter, category }) => {

    const [isOpen, setOpen] = useState(false);
    const onClose = () => setOpen(false);

    return (

        <div className='flex justify-between'>

            <button className='w-24 h-14 cursor-pointer ml-10 text-base font-bold border-2
                 border-white rounded bg-blue-500 p-2
                 hover:bg-blue-700 text-white' onClick={() => setOpen(true)}>
                등록하기
            </button>

            {isOpen && createPortal(
                <Modal onClose={onClose}>
                    <QuestionCustomerForm onAdd={onAdd} onClose={onClose} >
                        등록
                    </QuestionCustomerForm>
                </Modal>
                , document.body
            )}


            <QCHeaderFilter category={category} onFilter={onFilter} />

        </div>

    )
}

export default QCHeader