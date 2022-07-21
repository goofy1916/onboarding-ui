import React from 'react';

const ProcessStepper = ({ step, setCurrentStep }) => {
  function changeStep(chosenStep) {
    if (chosenStep <= step) {
      setCurrentStep(chosenStep);
    }
  }

  return (
    <div className='w-3/4 my-14 h-[44px] mx-auto flex justify-center relative'>
      <div className='flex w-full justify-between'>
        <div
        onClick={() => changeStep(1)}
          className={
            'cursor-pointer relative h-11 w-11 rounded-full z-10 flex items-center justify-center ' +
            (step >= 1
              ? 'bg-primary text-white'
              : 'bg-white border-textsecondary text-black')
          }
        >
          1
        </div>
        <div
        onClick={() => changeStep(2)}
          className={
            'cursor-pointer relative h-11 w-11 rounded-full z-10 flex items-center text-white justify-center ' +
            (step >= 2
              ? 'bg-primary text-white'
              : 'bg-white border border-textsecondary text-black')
          }
        >
          2
        </div>
        <div
        onClick={() => changeStep(3)}
          className={
            'cursor-pointer relative h-11 w-11 rounded-full z-10 bg-primary flex items-center text-white justify-center ' +
            (step >= 3
              ? 'bg-primary text-white'
              : 'bg-white border border-textsecondary text-black')
          }
        >
          3
        </div>
        <div
        onClick={() => changeStep(4)}
          className={
            'cursor-pointer relative h-11 w-11 rounded-full z-10 bg-primary flex items-center text-white justify-center ' +
            (step == 4
              ? 'bg-primary text-white'
              : 'bg-white border border-textsecondary text-black')
          }
        >
          4
        </div>
      </div>
      <div className='absolute top-1/2 w-full'>
        <div className='absolute h-[1px] z-0 bg-textsecondary w-full'></div>
        <div
          className={
            'absolute h-[1px] z-0 bg-primary ' +
            (step == 1
              ? 'w-1/5'
              : step == 2
              ? 'w-1/2'
              : step == 3
              ? 'w-4/5'
              : 'w-full')
          }
        ></div>
      </div>
    </div>
  );
};

export default ProcessStepper;
