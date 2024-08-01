import React, { useEffect, useState } from 'react'
import Modal from '../../../UI/Modal';
import { createPortal } from 'react-dom';
import QuestionCustomerForm from '../QuestionCustomerForm';

const QCBodyList = ({ list, onAdd, onUpdate, onDelete }) => {
    const [openModal, open] = useState(false);
    const closeModal = () => open(false);


    //esc키를 누르면 모달창이 닫히도록 하는 Effect
    useEffect(() => {

        const keyDownHandler = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [closeModal]);

    return (
        <li className='flex justify-center items-center w-full mt-8 shadow-md'>

            <div className='w-5/12 bg-blue-50 flex flex-col rounded'>
                <span>{list.category}</span>
                <h2>{list.title}</h2>
                <p className='hidden'>{list.summary}</p>
            </div>

            <div className='flex h-10 gap-1'>
                <button className=' bg-blue-500 w-20 text-white font-bold' onClick={() => open(true)}>수정</button>
                <button className=' bg-blue-500 w-20 text-white font-bold' onClick={() => onDelete(list.id)}>삭제</button>
            </div>

            {openModal && createPortal(

                <Modal onClose={closeModal}>
                    <QuestionCustomerForm list={list} onAdd={onAdd} onClose={closeModal} onUpdate={onUpdate} >
                        수정 하기
                    </QuestionCustomerForm>

                </Modal>, document.body


            )}


        </li>

    )
}

export default QCBodyList