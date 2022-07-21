import React from 'react';
import { RiCheckFill } from 'react-icons/ri';

const SuccessStep = ({userName, setCurrentStep }) => {

  return (
    <div>
        <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-primary'>
            <RiCheckFill size={20} className='text-white'/>
        </div>

      <div className='mt-6 text-secondary text-center font-bold text-4xl'>
        Congratulations, {userName}!
      </div>
      <div className='text-textSubTitle font-medium mt-4 text-sm mx-2 text-center'>
        You have completed onboaring, and you can start using Eden!
      </div>
      <div
        className='bg-primary rounded-md mt-6 
          text-sm font-bold text-white w-2/3 mx-auto h-[43px]'
      >
        <button
          onClick={() => setCurrentStep(1)}
          type='submit'
          className='flex w-full h-full items-center justify-center'
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default SuccessStep;
