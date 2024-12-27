import axios from 'axios';
import { useEffect,useState } from 'react';

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todos')
      .then(res => {
        setTodos(res.data.todos);
      });
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <>
    {todos.map(todo => <Track todo={todo} />)}
    </>
  );
}
export default App;