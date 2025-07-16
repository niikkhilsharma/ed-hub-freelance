import { CreateTestPage } from '@/components/teacher-b2c/create-test/CreateTestPage';

export default function CreateBWTest({ searchParams }: { searchParams: { step?: string }; }) {
  const step = parseInt(searchParams?.step || '1');
  const currentTestStep = isNaN(step) ? 1 : step;

  return (
    <div>
      <CreateTestPage testType="Test" currentTestStep={currentTestStep} />
    </div>
  );
}