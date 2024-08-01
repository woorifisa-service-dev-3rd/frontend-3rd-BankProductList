import React, { useState } from 'react'

const InputPhoneNumber = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (value) => {
    // 현재 입력된 값에서 숫자만 추출
    let formattedValue = value.replace(/[^0-9]/g, '');

    // 최대 11자리 숫자로 제한
    if (formattedValue.length > 11) {
      formattedValue = formattedValue.slice(0, 11);
    }

    // 입력된 값의 길이에 따라 포맷팅 적용
    if (formattedValue.length > 3 && formattedValue.length <= 7) {
      formattedValue = formattedValue.replace(/(\d{3})(\d+)/, '$1-$2');
    } else if (formattedValue.length > 7) {
      formattedValue = formattedValue.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
    }

    return formattedValue;
  }

  const handleChange = (event) => {
    const formattedValue = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedValue);
  }

  return (
    <div className='flex justify-center font-bold mt-10'>
      <label className='text-xl w-28'>
        전화번호
      </label>
      <input
        type="tel"
        placeholder="000-0000-0000"
        value={phoneNumber}
        onChange={handleChange}
      />
    </div>

  )
}

export default InputPhoneNumber
