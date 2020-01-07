import React, {Component} from 'react';

import Row from './Row';

class Thead extends Component {

    render() {
        return (
            <thead>
                <Row header data={this.props.data} sortFunc={this.props.sortFunc} />
            </thead>
        );
    }
}

export default Thead;
