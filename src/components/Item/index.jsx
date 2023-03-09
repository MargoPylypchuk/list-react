import React, { useState } from "react";
import "../../App.css";

function Item({ id, content }) {
  const [contentState, setContent] = useState([...content]);
  console.log(content);
  function closeText(text) {
    const copy = [...content];
    const index = copy.indexOf(text);
    if (index > -1) {
      copy.splice(index, 1);
    }
    setContent(copy);
  }

  function handleInput(input) {
    console.log(input.target.value);
    
  }
  function renderText(text) {
    console.log(text);
    const [newText,setNewText] = useState({})
    input.target.value = newText
  
  }
  return (
    <div>
      <div className="item">
        {contentState.map((text) => (
          <div className="text" key={text}>
            <div>{text}</div>
            <div className="right">
              <div onClick={() => renderText(text)}>r</div>
              <div onClick={() => closeText(text)} className='close'>x</div>
            </div>
          </div>
        ))}
      </div>
      <input type="text" className="input" onChange={handleInput} />
    </div>
  );
}
export default Item;
