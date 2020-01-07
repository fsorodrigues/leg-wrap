import React, {Component} from 'react';

class Hello extends Component {
    constructor(props) { super(props); }

    render() {
        return (
            <h1>Hello</h1>
        );
    }
}

export default Hello;

// <h1>{this.props.message}</h1>
