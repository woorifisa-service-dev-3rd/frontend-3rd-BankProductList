import React, { useEffect, useState } from 'react'
import InputName from '../Form/unit/InputName'
import InputEmail from '../Form/unit/InputEmail'
import InputText from '../Form/unit/InputText'
import FormButton from '../Form/unit/FormButton'
import CloseButton from '../Form/unit/CloseButton'
import InputTitle from '../Form/unit/InputTitle'
import InputCategory from '../Form/unit/InputCategory'




const QuestionCustomerForm = ({ onClose, onAdd, list,children, onUpdate }) => {

    const [title, settitle] = useState(children === '수정 하기' ? list.title : '');
    const [name, setname] = useState(children === '수정 하기' ? list.name : '');
    const [email, setemail] = useState(children === '수정 하기' ? list.email : '');
    const [summary, setsummary] = useState(children === '수정 하기' ? list.summary : '');
    const [category, setcategory] = useState(children === '수정 하기' ? list.category : 'Deposit');

    //수정값 객체선언 및 전달
    const editdata = ()=>{
        const newdata ={
            id: list.id,
            title: title,
            name: name,
            email: email,
            summary: summary,
            category: category,
        }
        onUpdate(newdata);
    }
    // 문의사항 추가
    const addData = ()=>{
        const newdata2 ={
            title,
            name,
            email,
            summary,
            category
        }

        onAdd(newdata2)
    }


    //esc키를 누르면 모달창이 닫히도록 하는 Effect
    useEffect(() => {

        const keyDownHandler = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [onClose]);





    return (
        <div className='flex flex-col justify-center'>
            <CloseButton onClose={onClose} />
            <h1 className='mt-20 flex justify-center items-center fort-bold text-4xl' >
                문의 사항
            </h1>

            <InputTitle title={title} settitle={settitle}/>
            <InputName name={name} setname={setname}/>
            <InputEmail email={email} setemail={setemail}/>
            <InputCategory category={category} setcategory={setcategory}/>
            <InputText summary={summary} setsummary={setsummary}/>
            <FormButton onAdd={onAdd} onClose={onClose} edit={editdata} child={children} addData={addData}/>


        </div>

    )
}

export default QuestionCustomerForm