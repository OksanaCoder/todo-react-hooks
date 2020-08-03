import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'
import TodoList from './components/TodoList'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons'



function App () {
  const [todos, setTodos] = useState ([
    { id: 1, title: 'read book', completed: false},
    { id: 2, title: 'write essay', completed: false},
    { id: 3, title: 'go to the gym', completed: false}

  ])
  const [todoTitle, setTodoTitle] = useState('')
  const addTodo = event => {
    if (event.key === 'Enter') {
       setTodos([
         ...todos,
         {
           id: Date.now(),
           title: todoTitle,
           completed: false
         }

       ])
       setTodoTitle('')
    }
  }

    return (
      <div className="container" >
          
            <Row>
            <Col lg={12} >
              <h3 className='mb-5' style={{textAlign: 'center', paddingTop: '80px'}}>Todo list</h3>
            </Col>
            </Row>
            <Row className='target-line' style={{width: '48%', margin: '0 auto', borderBottom: '1px solid grey'}}>
              <Col lg={12}> 
                 <small className='t' style={{width: '100%'}}>New todo</small>
                <input className='input-field' 
                       type='text'  
                       value={todoTitle} 
                       onChange={e => setTodoTitle(e.target.value)}
                       onKeyPress={addTodo}
                />
                {/* <button className='btn-add'><FontAwesomeIcon style={{color: 'brown'}} icon={faPlusCircle} /></button> */}
              </Col>
            </Row>
            <Row>
            <TodoList todos={todos} />
          </Row>
  
      </div>
    );
  
  
}

export default App;


