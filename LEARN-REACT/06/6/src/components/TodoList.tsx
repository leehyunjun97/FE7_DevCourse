import TodoListEmpty from './TodoListEmpty';
import TodoListItem from './TodoListItem';

export default function TodoList({
  todoList,
  setTodoList,
}: {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  return (
    <>
      <ul className='todo__list'>
        {!todoList.length ? (
          <TodoListEmpty />
        ) : (
          todoList.map((item) => <TodoListItem key={item.id} todo={item} setTodoList={setTodoList}/>)
        )}
      </ul>
    </>
  );
}
