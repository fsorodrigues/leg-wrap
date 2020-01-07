import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import Hello from '../components/Hello';

const pageOne = () => {
    return(
        <h2>pageOne</h2>
    );
};

const pageTwo = () => {
    return(
        <h2>pageTwo</h2>
    );
};

const pageParam = ({match}) => {
    return (
        <h2>pageParam {match.params.id}</h2>
    );
};

class pageUpdate extends Component {
    constructor(props) {
        super(props);
        this.updatePage = this.updatePage.bind(this);
        this.state = {
            id: 123
        };
    }

    componentDidMount() {
        this.updatePage(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        this.updatePage(newProps.match.params.id);
    }

    updatePage(id) {
        this.setState({id: id});
    }

    render() {
        return (
            <h2>pageUpdate {this.state.id}</h2>
        );
    }
}

const App = () => {
    return(

        <Router>
            <div>
                <Link to="/hello">Hello</Link> /
                <Link to="/page-one">Page One</Link> /
                <Link to="/page-two">Page Two</Link> /
                <Link to="/pageParam/123">Page 123</Link> /
                <Link to="/pageParam/234">Page 234</Link> /
                <Link to="/pageUpdate/123">Page 123</Link> /
                <Link to="/pageUpdate/234">Page 234</Link>
                <Route path="/hello" component={Hello}/>
                <Route path="/page-one" component={pageOne}/>
                <Route path="/page-two" component={pageTwo}/>
                <Route path="/pageParam/:id" component={pageParam}/>
                <Route path="/pageUpdate/:id" component={pageUpdate}/>
            </div>
        </Router>
    );
};

export default App;
