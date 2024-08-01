import React, { useState } from 'react'
import Bankheader from './Header/Bankheader';
import Bankbody from './Body/Bankbody';


const BankMain = () => {

    const [selectcategory, setcategory] = useState("ALL");
    const [insdata, setdata] = useState('');

    const arrayCategory = () => {



        console.log(insdata);
        const array = [
            {
                id: 1,
                title: "예금상품1",
                summary: "100만원 이하 연 0.2% 이윤금리",
                category: "Deposit"
            },
            {
                id: 2,
                title: "적금상품1",
                summary: "100만원 이하 연 3.2% 이윤금리",
                category: "Saving"
            },
            {
                id: 3,
                title: "대출상품1",
                summary: "100만원 이하 연 4.2% 상환금리",
                category: "Loan"
            },
            {
                id: 4,
                title: "예금상품2",
                summary: "100만원 이하 연 0.2% 이윤금리",
                category: "Deposit"
            },
            {
                id: 5,
                title: "적금상품2",
                summary: "100만원 이하 연 3.2% 이윤금리",
                category: "Saving"
            },
            {
                id: 6,
                title: "대출상품2",
                summary: "100만원 이하 연 4.2% 상환금리",
                category: "Loan"
            }
        ]
        const originarray = [...array];
        return (selectcategory !== "ALL" ? originarray.filter(array => array.category === selectcategory) : insdata ?
            originarray.filter(array => array.title.includes(insdata)) : originarray)
    }

    return (

        <div>


            <div className='flex justify-center items-center w-full h-1/6 font-bold'>
                <h1 className='text-5xl mt-10 mb-10'>00은행 상품 목록</h1>
            </div>

            <div className=''>

                <Bankheader categoryfilter={setcategory} setdata={setdata} />

                <Bankbody arrays={arrayCategory()} />

            </div>



        </div>
    )
}

export default BankMain