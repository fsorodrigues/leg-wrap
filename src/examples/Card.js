import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top" src="https://www.placecage.com/300/200" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">
                        Card title.
                    </h5>
                    <p className="card-text">
                        Card text.
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;
