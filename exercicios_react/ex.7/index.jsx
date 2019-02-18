import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family'
import Member from './member'


ReactDOM.render(
    
    <Family>    
        <Member name='joao' lastName='Silva'/>
        <Member name='Maria' lastName='Silva'/>    
    </Family>
      

    ,document.getElementById('app')
)