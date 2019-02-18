import React from 'react'

function childdrenWithProps(children,props){
    return React.Children.map(props.children,
        child => React.cloneElement(child,{...props}))
}

export {childdrenWithProps}