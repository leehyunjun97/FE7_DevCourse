import { useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function Todo() {
  // const [idCount, setIdCount] = useState(1);
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: 1, text: '밥먹기', completed: false },
  ]);

  // 상태 핸들러는 상위(Todo) 컴포넌트에서 관리하는게 좋다.
  // 하위 컴포넌트는 UI와 핸들러 실행만 한다.
  // uuid: Date.now().toString(36) + Math.random().toString(36).slice(2,8).toUpperCase()

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
