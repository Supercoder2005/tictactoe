import React from 'react';
import Square from './Square';

const Board = () => {
    return (
        <div classname='board-container'>
            <div classname='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div classname='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div classname='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
};

export default Board;