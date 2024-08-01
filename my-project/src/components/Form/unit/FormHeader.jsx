import React, { useEffect, useState } from 'react'

const FormHeader = ({ selectcategory }) => {

    const [title, setTitle] = useState('');

    useEffect(() => {
        if (selectcategory === 'Deposit') {
            setTitle('예금 상품 상담신청')
        } else if (selectcategory === "Saving") {
            setTitle('적금 상품 상담신청')
        } else {
            setTitle('대출 상품 상담신청')
        }
    }, [selectcategory]);

    return (
        <h1 className=' mt-10 flex justify-center items-center fort-bold text-5xl'>{title}</h1>
    )
}

export default FormHeader