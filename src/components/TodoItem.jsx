import React, { Component } from 'react'

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

export default function TodoItem({item}) {
    return( 
        <>
        <div style={positionLi}>
       
            <li>{item.title}</li>
          <div>  
            <button className='btn btn-done'>Complete</button>
            <button className='btn btn-delete'>Delete</button>
         </div>
        </div>
        </>
    )
}