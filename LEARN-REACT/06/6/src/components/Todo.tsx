import { useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function Todo() {
  // const [idCount, setIdCount] = useState(1);
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: 1, text: '밥먹기', completed: false },
  ]);

  return (
    <>
      <div className='todo'>
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor setTodoList={setTodoList} />
        {/* 할 일 목록  */}
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  );
}
