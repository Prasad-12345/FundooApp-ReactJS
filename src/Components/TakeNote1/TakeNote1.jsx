import React from 'react'
import list2 from '../Images/list-icon-1439.png';
import notedrawing from '../Images/brush-stroke.png';
import noteimage from '../Images/note images.png';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import './TakeNote1.css';
function TakeNote1(props) {
 
  return (
    <div  className='savenotes'>
        <div className="inputnotes">
            <input onClick={props.takeNote1} type="text" name="notes" id="note" placeholder='Take a note.....' />
            <CheckBoxOutlinedIcon/>
            <BrushOutlinedIcon/>
            <ImageOutlinedIcon/>
        </div>
    </div>
  )
}

export default TakeNote1
