
import React, { useState } from 'react'

const FormCheckboxes = () => {

    // 체크박스 상태 관리
    const [checkBoxes, setCheckBoxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false
    });

    // 체크박스 상태 변경 핸들러
    const checkedBoxHandler = (event) => {
        const { name, checked } = event.target;
        setCheckBoxes(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };


    return (

        <div className='flex flex-col mt-16 mx-20'>
            <label className='flex justify-between'>
                (필수)개인정보 수집 및 이용
                <div>
                    <input
                        className='w-6 h-6'
                        type="checkbox"
                        name='checkbox1'
                        checked={checkBoxes.checkbox1}
                        onChange={checkedBoxHandler} />
                    동의함
                </div>
            </label>

            <label className='flex justify-between'>
                (필수)고유식별정보 수집 및 이용
                <div>
                    <input
                        className='w-6 h-6'
                        type="checkbox"
                        name='checkbox2'
                        checked={checkBoxes.checkbox2}
                        onChange={checkedBoxHandler} />
                    동의함
                </div>
            </label>

            <label className='flex justify-between'>
                (선택)홍보 및 마케팅 수집 및 이용(이벤트, 혜택 등 광고성 정보 안내)

                <div>
                    <input
                        className='w-6 h-6'
                        type="checkbox"
                        name='checkbox3'
                        checked={checkBoxes.checkbox3}
                        onChange={checkedBoxHandler} />
                    동의함
                </div>
            </label>
        </div>
    )
}

export default FormCheckboxes
