import React from 'react'


const Modal = ({ children, onClose }) => {
    return (
        <>
            <div className='fixed top-0 left-0 w-full h-full backdrop-blur-xl z-10' onClick={onClose}>
            </div>
            <div className='fixed z-10 transform -translate-x-1/2 -translate-y-1/2
             bg-white w-4/5 p-10 top-1/2 left-1/2
             border-2 border-blue-400 rounded shadow-2xl'>
                {children}
            </div>
        </>
    )
}

export default Modal
