import React from 'react';
import { RiCheckFill } from 'react-icons/ri';

const SuccessStep = ({ userName, step, setCurrentStep }) => {
  return (
    <div className='mt-8'>
      <div className='w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-primary'>
        <RiCheckFill size={20} className='text-white' />
      </div>

      <div className='mt-8 text-secondary text-center font-bold text-3xl'>
        Congratulations, {userName}!
      </div>
      <div className='text-textSubTitle font-medium mt-2 text-sm mx-2 text-center'>
        You have completed onboaring, and you can start using Eden!
      </div>
      <div
        className='bg-primary rounded-md mt-8 
          text-sm font-bold text-white mx-4 md:w-1/2 md:mx-auto h-[40px]'
      >
        <button
          onClick={() => alert('Congrats')}
          type='submit'
          className='flex w-full h-full font-normal items-center justify-center'
        >
          Launch Eden
        </button>
      </div>
    </div>
  );
};

export default SuccessStep;
