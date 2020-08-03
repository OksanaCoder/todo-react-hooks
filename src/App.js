import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'
import TodoList from './components/TodoList'
class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'read book', isCompeted: false},
      { id: 2, title: 'write essay', isCompeted: false},
      { id: 3, title: 'go to the gym', isCompeted: false}
    ]
  }
  render () {

    return (
      <div className="container" >
          <Row >
            <Col lg={12} >
              <h3 className='mb-5' style={{textAlign: 'center', paddingTop: '80px'}}>Todo list</h3>
            </Col>
            <TodoList todos={this.state.todos} />
          </Row>
  
      </div>
    );
  }
  
}

export default App;


