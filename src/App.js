import React,{useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Modal from 'react-modal' 
Modal.setAppElement('#root')

function App() {
  
const [todos,setTodos] = useState([]);

function addTodo(todo){      setTodos( [...todos,todo] );     };

function removeTodo(id){  setTodos( todos.filter(todo=>todo.id !== id)  );};


  return (

    <div className="container"> 

      < TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo}  />
    
    </div>
  );}

export default App;
