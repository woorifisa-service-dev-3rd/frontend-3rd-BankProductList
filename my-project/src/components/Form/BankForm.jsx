import React, { useEffect } from 'react'
import FormHeader from './unit/FormHeader'
import InputName from './unit/InputName'
import InputPhoneNumber from './unit/InputPhoneNumber'
import InputEmail from './unit/InputEmail'
import FormCheckboxes from './unit/FormCheckboxes'
import FormButton from './unit/FormButton'
import CloseButton from './unit/CloseButton'




const BankForm = ({ onClose, category }) => {

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
        <>
            <CloseButton onClose={onClose} />
            <FormHeader selectcategory={category} />
            <InputName />
            <InputPhoneNumber />
            <InputEmail />
            <FormCheckboxes />
            <FormButton onClose={onClose} />


        </>
    )
}

export default BankForm