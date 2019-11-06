import React from "react";

const Card = props => {
    return (
        <div className="list">
            <h2>{props.title}</h2>
            <img className="spaceImg" alt="Nasa's photo of the day" src={props.url} />
            <p>{props.explanation}</p>
            <h3>Date: {props.date}</h3>
        </div>
    );
};

export default Card;