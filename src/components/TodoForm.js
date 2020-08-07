import React,{useState} from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({addTodo}){

   // declaration du state todo
   const [todo, setTodo] = useState( { task:'',id:'' } )

   function handletaskinputchange(e) {  setTodo(  {...todo, task: e.target.value}  );   }
 
   function handleSubmit(e){
      e.preventDefault();
        if(todo.task.trim()){ 
         addTodo({...todo, id: uuidv4()});
         setTodo({...todo,task:""});
           }
           else alert("enter a valid task")

          }

   return( 
 
        <form className = "header" onSubmit={handleSubmit}>

           <input
           autoComplete="off"
           value ={todo.task} 
           onChange ={handletaskinputchange}
           className="input"
           type="text"
           name="task"
           placeholder="enter task"
          />

           <button  className="button" type="submit" >Add</button>
           
        </form>
        
        
        
        
        );

}

export default TodoForm;
 