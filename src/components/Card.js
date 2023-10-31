import React from "react";
import './Card.css';

class Card extends React.Component {

    cardClickHandler(item) {
        this.props.onChoice(item);
    }

    render() {
        return (
            <div className={'card' + (this.props.isOpened ? ' opened' : ' closed')} key={this.props.item.id} onClick={this.cardClickHandler.bind(this, this.props.item)}>


                <div className="card-inner card-front">
                    <img src={'/images/' + this.props.item.image} alt={this.props.item.name}/>
                </div>

                <div className="card-inner card-back">
                    <img src={'./images/question.svg'} alt="question"/>
                </div>



            </div>
        );
    }
}

export default Card;