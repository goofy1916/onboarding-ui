import React from 'react';
import { useState } from 'react';
import { RiUser3Fill,RiTeamFill } from 'react-icons/ri';

const UsageType = ({ step,setCurrentStep }) => {

    const [usageType, setUsageType] = useState("Personal")

  return (
    <div>
      <div className='text-secondary text-center font-bold text-2xl'>
        How are you planning to use Eden?
      </div>
      <div className='text-textSubTitle font-medium mt-4 text-sm text-center'>
        We&apos;ll streamline your setup experience accordingly.
      </div>
      <div className='flex mt-4 gap-6 mx-4 md:w-[55%] md:mx-auto'>
        <div onClick={()=>setUsageType("Personal")} className={'cursor-pointer p-4 border-[2px] rounded-md ' + (usageType=="Personal"?"border-primary" : "border-textsecondary")} >
          <RiUser3Fill size={"20px"} className={(usageType=="Personal"?"text-primary" : "text-secondary")}/>
          <div className='mt-4 text-sm font-bold text-secondary'>
            For Myself
          </div>
          <div className='mt-2 text-sm font-medium text-textsecondary'>
            Write better. Think more clearly. Stay organized
          </div>
        </div>
        <div onClick={()=>setUsageType("Work")} className={'cursor-pointer p-4 border-[2px] rounded-md ' + (usageType=="Work"?"border-primary" : "border-textsecondary")} >
          <RiTeamFill size={"20px"} className={(usageType=="Work"?"text-primary" : "text-secondary")}/>
          <div className='mt-4 text-sm font-bold text-secondary'>
            With my team
          </div>
          <div className='mt-2 text-sm font-medium text-textsecondary'>
            Wikis, docs, tasks & projects, all in one place.
          </div>
        </div>
      </div>
      <div
        className='bg-primary rounded-md mt-6 
          text-sm font-bold text-white md:mx-auto mx-4 md:w-[55%] h-[44px]'
      >
        <button
          onClick={() => setCurrentStep(step+1)}
          type='submit'
          className='flex w-full h-full font-normal items-center justify-center'
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default UsageType;
