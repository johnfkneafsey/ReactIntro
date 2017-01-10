import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardTitle: "Board Title",
            text: "",
            cards: [
                {
                    title: "Some Title",
                    contents: ["Card1", "Card2", "Card3"]
                },
                {
                    title: "Some Other Title",
                    contents: ["Card4", "Card5", "Card6"]
                },
            ]
        };

        this.onAddSubmit = this.onAddSubmit.bind(this);
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
    }

    onAddSubmit(index, e){
        e.preventDefault();
        let userInput = this.state.text;
        let lists = this.state.cards.slice();
        lists[index] = {
            title: cards[index].title,
            contents: cards[index].contents.concat(userInput)
        }
        this.setState({
            cards: lists
        })

    }

    onAddInputChanged(event) {
        let value = event.target.value;
        console.log(value);
        this.setState({
            text: value
        });
    }

   render () {
        //The render method should render a List component,
        //passing in the array of cards from the state as the cards prop.
        const cards = this.state.cards;
        const card = cards.map((card, index)=> {
            return <List key={index} cards={this.state.cards} onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit.bind(null,index)} />
        })

        

    } 
}           