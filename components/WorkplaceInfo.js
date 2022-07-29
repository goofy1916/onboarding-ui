import React from 'react';
import { useState } from 'react';

const WorkplaceInfo = ({
  workplaceName,
  setWorkplaceName,
  workplaceURL,
  setWorkplaceURL,
  setCurrentStep,
}) => {
  const [errors, setErrors] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workplaceName.length < 3) {
      setErrors({
        workplaceName: 'Workplace name must be at least 3 characters',
      });
    } else {
      setCurrentStep(3);
    }
  };

  return (
    <div>
      <div className='text-secondary text-center font-bold text-4xl'>
        Let&apos;s set up a home for all your work
      </div>
      <div className='text-textSubTitle mt-4 font-medium text-sm text-center'>
        You can always create another workspace later.
      </div>
      <form
        className='flex flex-col mx-auto mt-8 w-3/4 md:w-1/2'
        onSubmit={handleSubmit}
      >
        <label className='text-base font-semibold text-[#40434A]'>
          Workspace Name
        </label>
        <input
          value={workplaceName}
          onChange={(e) => setWorkplaceName(e.target.value)}
          className='border-[2px] placeholder:text-textsecondary border-gray-300 rounded-md p-2 w-full'
          type='text'
          placeholder='Eden'
        />
        {errors && errors.workplaceName && (
          <div className='text-red-500 text-sm'>{errors.workplaceName}</div>
        )}

        <label className='mt-4 text-base font-semibold text-[#40434A]'>
          Workspace URL{' '}
          <span className='text-sm text-textsecondary'>(optional)</span>
        </label>

        <div className='flex border-[2px] border-gray-300 rounded-md  w-full'>
          <span className='bg-[#F4F6F9] text-sm font-semibold text-[#BDC5C6] rounded-l-md flex items-center justify-center px-2'>
            www.eden.com/
          </span>
          <input
            value={workplaceURL}
            onChange={(e) => setWorkplaceURL(e.target.value)}
            type='text'
            placeholder='Example'
            className='placeholder:text-textsecondary pl-4 py-2 pr-2 w-full'
          />
        </div>
        <input
          type='submit'
          className='bg-[#5A4AD1] rounded-md mt-6 text-sm font-bold text-white w-full h-[43px]'
          value='Create Workspace'
        />
      </form>
    </div>
  );
};

export default WorkplaceInfo;

