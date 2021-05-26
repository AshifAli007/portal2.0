import React from 'react'
import classes from '../Cards/Cards.css';
const Cards = (props) =>{
    return(
        <div className={classes.card}>
            <h3>{props.name}</h3>
        </div>
    );
};

export default Cards;