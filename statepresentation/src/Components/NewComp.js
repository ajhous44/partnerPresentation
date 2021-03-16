import React, { Component } from 'react'
import sadbird from "./sadbird.png"
import happybird from "./happybird.png"

class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "I've been feeling a little... blue"
             ,sub: "Cheer up",
             imageURL: sadbird
        };
    }

    styles={
        fontStyle: "italic",
        color: "blue"
      };

    Buttonchange = () => {
        this.setState({
            message: "I'm happy now",
            sub: "You're a good person",
            imageURL: happybird
        });
    };
    
    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>  
                <p /><img src={this.state.imageURL} alt="" />
                    
            </div>
        )
    }
}

export default NewComp
