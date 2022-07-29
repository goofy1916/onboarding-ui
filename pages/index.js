import Image from 'next/image';
import { useState } from 'react';
import ProcessStepper from '../components/ProcessStepper';
import SuccessStep from '../components/SuccessStep';
import UsageType from '../components/UsageType';
import UserNameInfo from '../components/UserNameInfo';
import WorkplaceInfo from '../components/WorkplaceInfo';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [workplaceName, setWorkplaceName] = useState('');
  const [workplaceURL, setWorkplaceURL] = useState('');

  var steps = [
    <UserNameInfo
      key={'UserNameInfo'}
      step={currentStep}
      userName={userName}
      setUserName={setUserName}
      fullName={fullName}
      setFullName={setFullName}
      setCurrentStep={setCurrentStep}
    />,
    <WorkplaceInfo
      key={'WorkPlaceInfo'}
      step={currentStep}
      workplaceName={workplaceName}
      setWorkplaceName={setWorkplaceName}
      workplaceURL={workplaceURL}
      setWorkplaceURL={setWorkplaceURL}
      setCurrentStep={setCurrentStep}
    />,
    <UsageType
      key={'UsageType'}
      step={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <SuccessStep
      key={'SuccessStep'}
      userName={userName}
      step={currentStep}
      setCurrentStep={setCurrentStep}
    />,
  ];

  return (
    <div className='container mx-auto'>
      <div className='mx-4 my-10 sm:w-4/5 md:w-3/5 sm:mx-auto'>
        <div className='my-10 relative w-full h-16'>
          <Image
            layout='fill'
            objectFit='contain'
            alt='logo'
            src={'/logo.PNG'}
          />
        </div>
        <div className='w-2/3 md:w-1/2 mx-auto'>
          <ProcessStepper
            NoOfSteps={steps.length}
            step={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
        {steps[currentStep - 1]}
      </div>
    </div>
  );
}
