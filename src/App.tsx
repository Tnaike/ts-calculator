import React from 'react';
import CalculatorLogo from './assets/calculator-plus.png';

function App() {
  return (
    <div className='appWrapper'>
      <div className='flex flex-col items-center gap-2'>
        <img src={CalculatorLogo} alt='Calculator Plus Logo' />
        <h1 className='font-semibold'>Calculator app</h1>
      </div>
    </div>
  );
}

export default App;
