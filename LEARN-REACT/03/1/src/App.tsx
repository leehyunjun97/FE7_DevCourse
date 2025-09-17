import { twMerge } from 'tailwind-merge';

// CSS Modules -> classNames
// Tailwind CSS -> tailwind-merge
export default function App() {
  const isBlue = false;
  return (
    <>
      <div className='vertical'>
        <button className='btn-primary'>Hello world!</button>
        <button className={twMerge('bg-amber-500', isBlue && 'bg-blue-500')}>
          버튼
        </button>
      </div>
    </>
  );
}
