import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical, faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const positionLi = {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid grey',
    padding: '10px 20px',
    marginBottom: '10px',
    borderRadius: '5px',
    alignItems: 'center',
    background: '#fff'
}

export default function TodoItem({item, setTodos}) {

 const [completed, setCompleted] = useState(false)
//  console.log(completed)

 const removeTodo = (id) =>  {   setTodos(item.filter((todo) => todo.id != id )) }
 
 useEffect(() => {
     console.log('rendered')
 })
    return( 
        <>
        <div style={positionLi}>
       
            <li className='item-to-do' style={{textDecoration: completed ? 'line-through' : ''}}><FontAwesomeIcon className='mr-2' style={{color: 'brown'}} icon={faGripLinesVertical} /> {item.title}</li>
          <div style={{display:'flex', alignItems: 'center'}}>
             
            <button className='btn btn-done'>
                { !completed ?  <FontAwesomeIcon style={{color: 'brown'}} 
                                 icon={faCheckCircle} 
                                 onClick={() => setCompleted(!completed)}/> :
                                 null }
               
            </button>
         
            <button className='btn btn-delete'><FontAwesomeIcon style={{color: 'brown'}} 
                                                                icon={faTrash}
                                                                onClick={() => removeTodo(item.id)}
                                                                /></button>
         </div>
        </div>
        </>
    )
}