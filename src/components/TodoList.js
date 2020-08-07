import React from 'react'
import Todo from './Todo'



function TodoList({todos,removeTodo}){
    
    return (
        <div>
            
            {todos.map(todo=>(
                <Todo       
                  todo={todo} 
                  key={todo.id}
                  removeTodo={removeTodo}
                  
                  />
                  
             ) )}
             
        </div>
    );

}
export default TodoList;