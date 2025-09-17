import Button from './components/html/Button';
import CheckBox from './components/html/CheckBox';
import Input from './components/html/Input';

export default function App() {
  return (
    <>
      <Input placeholder='Enter' /> <br />
      <Button disabled>Add</Button>
      <Button className='bg-[#ed4848]'>Cancel</Button> <br />
      <CheckBox type='checkbox'>
        I agree with <span className='font-bold'>terms</span> and{' '}
        <span className='font-bold'>policies</span>
      </CheckBox>
    </>
  );
}
