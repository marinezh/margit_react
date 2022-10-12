import React from "react";


const Box = (props) => {
    return (
      
        <div className="box">
            <h2>{props.name}</h2>
            <p>Title: {props.title}</p>
            <p>Age: {props.age}</p>
            <ul>{props.lang}</ul>
        </div>
    );
};
export default Box;
