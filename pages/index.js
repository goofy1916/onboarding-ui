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

  return (
    <div className='container mx-auto'>
      <div className='mx-2 md:w-2/3 md:mx-auto'>
        <div className='mt-10 relative w-full h-16'>
          <Image
            layout='fill'
            objectFit='contain'
            alt='logo'
            src={'/logo.PNG'}
          />
        </div>
        <ProcessStepper step={currentStep} setCurrentStep={setCurrentStep} />
        {currentStep == 1 && (
          <UserNameInfo
            userName={userName}
            setUserName={setUserName}
            fullName={fullName}
            setFullName={setFullName}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep == 2 && (
          <WorkplaceInfo
            workplaceName={workplaceName}
            setWorkplaceName={setWorkplaceName}
            workplaceURL={workplaceURL}
            setWorkplaceURL={setWorkplaceURL}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep == 3 && <UsageType setCurrentStep={setCurrentStep} />}
        {currentStep == 4 && (
          <SuccessStep userName={userName} setCurrentStep={setCurrentStep} />
        )}
      </div>
    </div>
  );
}
