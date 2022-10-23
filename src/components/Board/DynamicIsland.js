import React, {useState, useRef, useEffect} from 'react'

import { Col, Container, Row, Input} from "reactstrap";
import './DynamicIsland.css' 
import '../../fonts/AlmaMono-Regular.otf';

const DynamicIsland = (props) => {
  const [width, setWidth] = useState(1);
  
  const changeHandler = e => {
    setWidth(e.target.value.length > 0 ? e.target.value.length : 1);
  };

  const inputRef = useRef(null);

  const enterHandler = e => {
    if (e.key == 'Enter' && e.target.value.trim().length > 0) {
      props.enterPressed(true);
    }

    else if (e.key == 'Enter' && e.target.value.trim().length == 0) {
      setWidth(1);
      inputRef.current.value = ''
    }
  }
 
  return (
    <input ref={inputRef} style={{ width: width +'ch'}} type="text" autoFocus onChange={changeHandler} onKeyDown={enterHandler} id = 'island' className='rounded-0 bg-dark'/>
  )
};

export default DynamicIsland