import React, {Component} from 'react';

import ExpandableRow from './ExpandableRow';

class Tbody extends Component {

    render() {
        console.log(this.props.data);
        return (
            <tbody>
                <ExpandableRow />
            </tbody>
        );
    }
}

export default Tbody;
// <Row data={this.props.data} />
