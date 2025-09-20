import { useState } from 'react';
import Button from './html/Button';
import Input from './html/Input';

export default function TodoEditor({
  setTodoList,
}: {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const [input, setInput] = useState('');

  const todoEditHandler = () => {
    setTodoList((prev) => {
      const id = prev[0] ? prev[prev.length - 1].id + 1 : 1;
      return [
        ...prev,
        {
          id,
          text: input,
          completed: false,
        },
      ];
    });
  };

  return (
    <>
      <form
        className='todo__form'
        onSubmit={(e) => {
          e.preventDefault();
          todoEditHandler();
        }}
      >
        <div className='todo__editor'>
          <Input
            type='text'
            className='todo__input'
            placeholder='Enter Todo List'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button className='todo__button' type='submit'>
            Add
          </Button>
        </div>
      </form>
    </>
  );
}
