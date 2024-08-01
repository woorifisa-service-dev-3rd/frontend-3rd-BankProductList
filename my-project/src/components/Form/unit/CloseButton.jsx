import React from 'react'

const CloseButton = ({ onClose }) => {


    return (
        <button
            className='absolute p- w-6 h-6 top-4 right-4 font-bold text-lg text-gray-500 hover:text-red-500'
            onClick={onClose}
        > X </button>
    )
}

export default CloseButton