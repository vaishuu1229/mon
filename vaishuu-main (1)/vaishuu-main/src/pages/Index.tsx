import { useState } from 'react';
import { SecretCodeEntry } from '@/components/SecretCodeEntry';
import { CakeSection } from '@/components/CakeSection';
import { BirthdayMessage } from '@/components/BirthdayMessage';

type Stage = 'entry' | 'cake' | 'message';

const Index = () => {
  const [stage, setStage] = useState<Stage>('entry');
  const [userName, setUserName] = useState('');

  const handleCodeSuccess = (name: string) => {
    setUserName(name);
    setStage('cake');
  };

  const handleCandlesBlown = () => {
    setStage('message');
  };

  return (
    <main className="min-h-screen">
      {stage === 'entry' && (
        <SecretCodeEntry onSuccess={handleCodeSuccess} />
      )}
      {stage === 'cake' && (
        <CakeSection name={userName} onCandlesBlown={handleCandlesBlown} />
      )}
      {stage === 'message' && (
        <BirthdayMessage name={userName} />
      )}
    </main>
  );
};

export default Index;
