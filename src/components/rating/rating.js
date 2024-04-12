import {React,useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar  } from "@fortawesome/free-solid-svg-icons";

export default function Rating() {
  const [rating, setRating] = useState(0);
  //I have also created re-usable Ui-component for icons in ui-components folder. we can use that if we are having other icons to be displayed.
  //That is also one of the approach i would use so that we can have reusable components.
  return (
    <div>
    <FontAwesomeIcon color={rating >= 1 ?'yellow':'grey'} icon={faStar} onClick={()=>{setRating(1)}}/>
    <FontAwesomeIcon color={rating >= 2 ?'yellow':'grey'} icon={faStar} onClick={()=>{setRating(2)}}/>
    <FontAwesomeIcon color={rating >= 3 ?'yellow':'grey'} icon={faStar} onClick={()=>{setRating(3)}}/>
    <FontAwesomeIcon color={rating >= 4 ?'yellow':'grey'} icon={faStar} onClick={()=>{setRating(4)}}/>
    <FontAwesomeIcon color={rating >= 5 ?'yellow':'grey'} icon={faStar} onClick={()=>{setRating(5)}}/>    
    </div>
  )
}