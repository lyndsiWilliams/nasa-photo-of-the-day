import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";

export default function List() {
    const [list, setList] = useState([]);
    console.log(list);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=H7Kr6ax7MitbwIjpJrPMKqgj3WWhgKnlhitSkoeU')
        .then(response => {
            setList(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log("The data was not returned.", error)
        })
    }, [])
    
    return (
        <div className="listCont">
            <Card
                list={list}
            />
        </div>
    );
}