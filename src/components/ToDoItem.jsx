import React, { useState } from "react";

function toDoItem(props){
    

    return (
        <div onClick={() => {
            props.onClicked(props.id);
        }}>
            <li>{props.text}</li>
        </div>
        
    );
}

export default toDoItem;