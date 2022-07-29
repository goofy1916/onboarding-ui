import React from 'react';

const ProcessStepper = ({ NoOfSteps, step, setCurrentStep }) => {
  function changeStep(chosenStep) {
    if (chosenStep <= step) {
      setCurrentStep(chosenStep);
    }
  }

  function getSteps() {
    var stepComponents = [];
    for (var stepIndex = 1; stepIndex <= NoOfSteps; stepIndex++) {
      stepComponents.push(
        <>
          <div
            key={stepIndex}
            onClick={() => changeStep(stepIndex)}
            className={
              'cursor-pointer relative aspect-square p-2 px-4 rounded-full z-10 flex items-center justify-center ' +
              (step >= stepIndex
                ? 'bg-primary text-white'
                : 'bg-white border border-textsecondary text-black')
            }
          >
            {stepIndex}
          </div>
          {stepIndex != NoOfSteps && (
            <div
              className={
                `h-[2px] z-10 w-full ` +
                (stepIndex == step
                  ? 'progress-bar-half'
                  : stepIndex < step
                  ? 'progress-bar-full'
                  : '')
              }
            ></div>
          )}
        </>
      );
    }
    return stepComponents;
  }

  return (
    <div className='w-full my-14 h-[44px] mx-auto flex justify-center relative'>
      <div className='flex w-full h-full items-center justify-between'>
        {NoOfSteps > 0 && getSteps()}
      </div>
      <div className='absolute top-1/2 w-full'>
        <div className='absolute h-[1px] z-0 bg-textsecondary w-full'></div>
      </div>
    </div>
  );
};

export default ProcessStepper;
