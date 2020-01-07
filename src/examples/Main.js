// react
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

// importing modules
import Tabs from '../layout-components/Tabs';
import Gov from '../components/Gov';
import UsCongress from '../components/UsCongress';
import StateSenate from '../components/StateSenate';
import StateHouse from '../components/StateHouse';
import OtherRaces from '../components/OtherRaces';

// import GovMain from '../components/GovMain';
// import UsCongressMain from '../components/UsCongressMain';

class Main extends Component {
    constructor(props) { super(props); }

    render() {
        return (
            <div className='wrapper-main'></div>
        );
    }
}

export default Main;
 // col-12 mt-5
