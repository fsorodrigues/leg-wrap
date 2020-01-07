import React, {Component} from 'react';
import {csv} from 'd3-fetch';

import Table from '../components/Table';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const data = csv('./data/data.csv',d => d);
        data.then((data) => {
            this.setState({
                data:data
            });
            return data;
        });
    }

    render() {
        return (
            <div className={"table-container"}>
                <Table data={this.state.data}/>
            </div>
        );
    }
}

export default App;
