import React, {Component} from 'react';
import ModuleList from './ModuleList';
import Tabs from './Tabs';
import Deck from './Deck';

class Editor extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>

                <div className="col-8">
                    <Tabs/>
                    <Deck/>
                </div>
            </div>
        );
    }
}

export default Editor;
