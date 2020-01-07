// react
import React, {Component} from 'react';

// importing modules

class UsCongressMain extends Component {
    constructor(props) {
        super(props);
        this.updatePage = this.updatePage.bind(this);
        this.state = {};
    }

    componentDidMount() {
        this.updatePage(this.props.match.params);
    }

    componentWillReceiveProps(newProps) {
        this.updatePage(newProps.match.params);
    }

    updatePage() {
        this.setState({});
    }

    render() {
        return (
            <div className='wrapper-us-congress'></div>
        );
    }
}

export default UsCongressMain;
