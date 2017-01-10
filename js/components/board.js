import React from 'react';
import List from './list';

import ListContainer from './list-container';

export default function Board(props) {
    const lists = props.lists.map((title, index) => <List key={index} title={title} />);
    return (
        <div className="board">
            <h1>{props.title}</h1>
            {ListContainer}
        </div>
    );
}

Board.defaultProps = {
    lists: []
};




//need function for onAddInputChanged