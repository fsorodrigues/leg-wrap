import React, {Component} from 'react';
import Card from '../components/Card';

class Deck extends Component {
    render() {
        return (
            <div className="card-deck">
                <div className="card-deck">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        );
    }
}

export default Deck;
