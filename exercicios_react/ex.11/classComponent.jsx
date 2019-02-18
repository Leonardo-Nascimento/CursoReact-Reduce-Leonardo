import React,{Component} from 'react'

export default class ClassComponent extends Component{
    
    constructor(props){
        super(props)
        this.state = {value: props.initalValue}
    }


    sum(delta){
        this.setState({value: this.state.value + delta})
    }  
    
    
    
    render(){
        
        return(
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Decrementar</button>
                <button onClick={() => this.sum(1)}>incrementar</button>
            </div>            
        )
        
    }
}