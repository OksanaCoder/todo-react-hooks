import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import TodoItem from './TodoItem'
export default function TodoList({todos, removeTodo}) {
    const remove = () => {
        this.props.removeTodo()
    }
    return (
        <Container style={{marginTop: '10px'}}>
            <Row>
                <Col lg={12}>
                    <ul className='list-unstyled' style={{width: '50%', margin: '0 auto'}}>
                        {todos.map( item => {
                            return (
                              <TodoItem key={item.id} item={item} onClick={{remove}}/>
                         
                            )
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}