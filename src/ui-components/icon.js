import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//This can be used as reusable component for icon.
export default function Icon(props) { 
  // we can use this event to send the data to the parent element
  function handleOnClick(){
  }   

  return (
    <FontAwesomeIcon icon={props.icon} color={props.color} onClick={handleOnClick}/>
  )
}