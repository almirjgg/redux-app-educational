import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todos = [], isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const previousTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos -RTK query</h1>
      <hr />

      <h4>isLoading:{isLoading}</h4>
      <pre>...</pre>
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <button onClick={previousTodo}>next previous</button>
      <button onClick={nextTodo}>next todo</button>
    </>
  );
};
