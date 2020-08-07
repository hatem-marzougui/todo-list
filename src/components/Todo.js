import React,{useState} from 'react'
import Modal from 'react-modal' 

function Todo({todo,removeTodo}) {

const [modalIsOpen, setmodalIsOpen] = useState(false)

function handleRemoveClick(id){removeTodo(todo.id)};

let oldtodo=todo.task;

    return(
        <div className='task'>
        
        <p>
            {todo.task} 
            
              <i className="fas fa-pencil-alt"  onClick={()=>setmodalIsOpen(true)}/>

              <Modal  isOpen={modalIsOpen}>
              <input 
               placeholder={todo.task} 
               
               onChange ={(e)=> todo.task=e.target.value}
               className="input"
               type="text"/>
               <button className="button" onClick={()=>setmodalIsOpen(false)}>confirm</button>
               <button className="button" onClick={()=> {todo.task=oldtodo;setmodalIsOpen(false)}}>cancel</button>
              </Modal>

              <i className="fas fa-trash-alt"  onClick={handleRemoveClick}/>
              </p> 
        
        </div>
    );

    
}
export default Todo