import React, {Component} from 'react';

import Thead from './Thead';
import ExpandableRow from './ExpandableRow';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy:"category"
        };

        this.sortHandler = this.sortHandler.bind(this);
    }

    sortHandler(d) {
        this.setState({sortBy:d});
    }

    render() {

        if (!this.props.data) {
            return (
                <div className={"load_filler_container"}>
                    <div className={"load_filler"}></div>
                    <div className={"load_filler"}></div>
                    <div className={"load_filler"}></div>
                    <div className={"load_filler"}></div>
                    <div className={"load_filler"}></div>
                </div>
            );

        }
        else {
            return (
                <table className='table'>
                    <Thead data={this.props.data} sortFunc={this.sortHandler} />
                    <ExpandableRow sortBy={this.state.sortBy} data={this.props.data} />
                </table>
            );
        }

    }
}

export default Table;
