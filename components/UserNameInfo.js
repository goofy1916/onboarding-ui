import React, { useState } from 'react';

const UserNameInfo = ({
  step,
  fullName,
  setFullName,
  userName,
  setUserName,
  setCurrentStep,
}) => {
  const [errors, setErrors] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.length < 3) {
      setErrors({ fullName: 'Full name must be at least 3 characters' });
    } else if (userName.length < 3) {
      setErrors({ userName: 'User name must be at least 3 characters' });
    } else {
      setCurrentStep(step+1);
    }
  };

  return (
    <div>
      <div className='text-secondary text-center font-bold text-3xl'>
        Welcome! First things first...
      </div>
      <div className='text-textSubTitle font-medium mt-2 text-sm text-center'>
        You can always change them later.
      </div>
      <form
        className='flex flex-col mx-6 md:mx-auto mt-8 md:w-1/2'
        onSubmit={handleSubmit}
      >
        <label className='text-sm font-semibold text-secondary '>
          Full Name
        </label>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className='border-[2px] placeholder:text-textsecondary border-gray-300 rounded-md p-2 w-full'
          type='text'
          placeholder='Steve Jobs'
        />
        {errors && errors.fullName && (
          <div className='text-red-500 text-sm'>{errors.fullName}</div>
        )}
        <label className='mt-4 text-sm font-semibold text-secondary'>
          Display Name
        </label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type='text'
          placeholder='Steve'
          className='border-[2px] placeholder:text-textsecondary border-gray-300 rounded-md p-2 w-full'
        />
        {errors && errors.userName && (
          <div className='text-red-500 text-sm'>{errors.userName}</div>
        )}
        <input
          type='submit'
          className='bg-primary rounded-md mt-6 
          text-sm font-normal text-white w-full h-10'
          value='Create Workspace'
        />
      </form>
    </div>
  );
};

export default UserNameInfo;
