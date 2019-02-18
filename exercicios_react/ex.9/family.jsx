import React from 'react'
import {childdrenWithProps} from '../utils/reactUtil'


export default props => (
    <div>
        <h2>Familia</h2>
        
        {childdrenWithProps(props.children,props)}
    </div>
)