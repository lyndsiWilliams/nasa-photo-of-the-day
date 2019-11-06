import React from "react";

const Card = props => {
    return (
        <div className="list">
            <h2>{props.list.title}</h2>
            <img className="spaceImg" alt="Nasa's photo of the day" src={props.list.url} />
            <p>{props.list.explanation}</p>
            <h3>Date: {props.list.date}</h3>
        </div>
    );
};

export default Card;