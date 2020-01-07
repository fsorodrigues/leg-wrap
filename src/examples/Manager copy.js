import React, {Component} from 'react';
import Editor from './Editor';

class Manager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Manager</h1>
                <Editor/>
            </div>
        );
    }
}

export default Manager;
