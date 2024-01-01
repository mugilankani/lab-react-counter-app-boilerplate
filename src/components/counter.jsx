import React, {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }


    Increment(){
        this.setState({
            count : this.state.count + 1
        }
        )
    }
    Decrement(){
        this.setState({
            count : this.state.count -1
        })
    }
    Reset(){
        this.setState({
            count: 0
        })
    }


    render(){
        return(
             <div id='countainer'>
                <header id='AppName'>
                    <h1>COUNTING APP</h1>

                </header>
                <div className='grid1'>
                    
                    <h1 className='counter'>{this.state.count}</h1>
                </div>
                <div className='functions'>
                    <button onClick={() => this.Increment()}>+</button>
                    <button onClick={() => this.Decrement()}>-</button>
                    <button onClick={() => this.Reset()}>Reset</button>

                </div>

            </div>
        )
    }
}

export default Counter