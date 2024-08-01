
import { useState } from 'react';
import './App.css'
import QuestionCustomer from './components/QuestionCustomer/QuestionCustomer';
import BankMain from './components/bank/BankMain';
import QustionCustomerMain from './components/QuestionCustomer/QustionCustomerMain';

//     id: self.crypto.randomUUID(),
function App() {

  
  const [currentPage, setCurrentPage] = useState('bankMain');

  const renderPage = () => {
    switch (currentPage) {
      case 'questionCustomer':
        return <QustionCustomerMain />;
      default: return <BankMain />
    }
  };

  return (

    <div className='bg-cyan-50 min-w-screen min-h-screen'>



      <QuestionCustomer setCurrentPage={setCurrentPage} currentPage={currentPage} />


      {renderPage()};

    </div>

  )
}

export default App