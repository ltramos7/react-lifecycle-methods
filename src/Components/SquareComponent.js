import React, { Component } from 'react'
import '../index.css'

class SquareComponent extends Component {
    constructor(){
        console.log("SquareComponent constructor method invoked")
        super()
        this.state = {
            color: "black"
        }
    }
    componentDidUpdate = () => {
        console.log("SquareComponent componentDidUpdate() method invoked")
    }
    componentWillUnmount= () => {
        console.log("SquareComponent componentUnmount() method invoked")
    }
    componentDidMount = () => {
        console.log("SquareComponent componentDidMount() method invoked")
    }
    handleBlueClick = () => {
        console.log("Blue Button Clicked")
        this.setState({color: "blue"})
    }
    handleOrangeClick = () => {
        console.log("Orange Button Clicked")
        this.setState({color: "orange"})
    }
    handleGreenClick = () => {
        console.log("Green Button Clicked")
        this.setState({color: "green"})
    }
    
    render() {
        console.log("SquareComponent render() method invoked")
        return (
            <div>
                <h3>Color is {this.state.color}</h3>
                <div className="square" style={{backgroundColor: this.state.color}}/>
                <div>
                    <p>Click the button to change the color.</p>
                    <button onClick={this.handleBlueClick}>Blue</button>
                    <button onClick={this.handleOrangeClick}>Orange</button>
                    <button onClick={this.handleGreenClick}>Green</button>
                </div>
            </div>
        )
    }
}

export default SquareComponent

