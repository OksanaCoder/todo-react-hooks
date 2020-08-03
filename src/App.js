import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () {

    return (
      <div className="container">
          <Row>
            <Col lg={12}>
              <h3>Todo list</h3>
            </Col>
            <TodoList />
          </Row>
  
      </div>
    );
  }
  
}

export default App;


