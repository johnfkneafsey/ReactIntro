import React from 'react';

import Card from './card';

export default function List(props) {
    const cards = props.cards.map((text, index) => <Card key={index} text={text} />);
   

    return (
        <div className="list">
            <h2>{props.title}</h2>
            {cards}
            <form onSubmit={props.onAddSubmit}>
                <input onChange={props.onAddInputChanged} type="text" placeholder="this is an input form"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
}

List.defaultProps = {
    cards: []
};

/*
 onChange={this.onAddInputChanged} in input
 onSubmit={this.onAddSubmit} in form
    onAddInputChanged() {
        console.log("Input changed!")
    }

    onAddSubmit() {
        console.log("submitted!")
    }
*/
