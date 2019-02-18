import React,{Component} from 'react'

class Field extends Component{
    
    constructor(props){
        super(props)
        this.state = {value: props.initalValue}
        this.handchange = this.handchange.bind(this)
    }

    handchange(event){
        this.setState({value: event.target.value})
    }

    render() {
        return(
            
            <div>
                <label>{this.state.value}</label> <br></br>
                <input onChange={this.handchange} value={this.state.value} />
            </div>
        )
    } 
    
}

export default Field