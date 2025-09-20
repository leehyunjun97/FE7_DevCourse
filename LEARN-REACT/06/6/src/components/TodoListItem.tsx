import { useState } from 'react';
import Button from './html/Button';
import Checkbox from './html/Checkbox';
import SvgClose from './svg/SvgClose';
import SvgPencil from './svg/SvgPencil';

export default function TodoListItem({
  todo,
  setTodoList,
}: {
  todo: Todo;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const [isModify, setIsModify] = useState(false);
  const [modifyInput, setModifyInput] = useState(todo.text);

  const todoDeleteHandler = (id: number) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  const todoModifyHandler = (id: number) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text: modifyInput } : item
      )
    );
  };

  const modifyToggle = () => {
    if (isModify) {
      setIsModify((prev) => !prev);
      todoModifyHandler(todo.id);
    } else {
      setModifyInput(todo.text);
      setIsModify((prev) => !prev);
    }
  };

  const complateHandler = (id: number) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );

    console.log('현재: ', todo);
  };

  return (
    <>
      {/* 할 일이 완료되면 .todo__item--complete 추가 */}
      <li className={`todo__item`}>
        {isModify ? (
          <input
            type='text'
            className='todo__modify-input'
            value={modifyInput}
            onChange={(e) => setModifyInput(e.target.value)}
          />
        ) : (
          <Checkbox
            parentClassName='todo__checkbox-group'
            type='checkbox'
            className='todo__checkbox'
            checked={todo.completed}
            onChange={() => complateHandler(todo.id)}
          >
            {todo.text}
          </Checkbox>
        )}

        {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}

        <div className='todo__button-group'>
          <Button className='todo__action-button' onClick={modifyToggle}>
            <SvgPencil />
          </Button>
          <Button
            className='todo__action-button'
            onClick={() => todoDeleteHandler(todo.id)}
          >
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
}
