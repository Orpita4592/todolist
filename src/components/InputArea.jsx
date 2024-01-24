import React, { useState } from "react";

function InputArea(props){

    const [item, setItem] = useState("");

    function updateItem(event){
        const newValue = event.target.value;
        setItem(newValue);
    }

    return (
        <div className="form">
        <input type="text" onChange={updateItem} value={item} />
        <button onClick={
            () => {
                props.onClicked(item);
                setItem("");
            }
        }>
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea;