import React from 'react';
const Card = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>RollNo: {props.rollno}</h1>
            <h1>Day: {props.day}</h1>
        </div>
    );
}

export default Card;
