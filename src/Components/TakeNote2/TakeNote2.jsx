import React, { useState } from 'react';
import ColorPopper from '../colorPopper/ColorPopper';
import './TakeNote2.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import pin from '../Images/pin.png'
import Button from '@mui/material/Button';
import { addNote } from '../../Services/DataServices';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';

function TakeNote2(props) {
    const[takeNote2Obj, setTakeNote2Obj] = useState({Title:'', Description:'', colour:'white', isArchived:false, isDelete:false});

    const takeTitle = (event) => {
        setTakeNote2Obj((prevState) => ({...prevState, Title : event.target.value}));
    }

    const takeDescription = (event) => {
        setTakeNote2Obj((prevState) => ({...prevState, Description : event.target.value}));
    }

    const takeColor = (color) => {
        setTakeNote2Obj((prevState) => ({...prevState, colour : color}));
   }

   const createArchive = () => {
        setTakeNote2Obj((prevState) => ({...prevState, isArchived : true}));
   }

   const submit = () => {
    addNote(takeNote2Obj)
    .then((resp) => { console.log(resp)})
    .catch((error) => { console.log(error) })
   }

  return (
    <ClickAwayListener onClickAway={props.takeNote2}>

    <div className='savenotes2' style={{backgroundColor:takeNote2Obj.colour}}>
        <div className="inputnotes2">
            <div className="input1" style={{backgroundColor:takeNote2Obj.colour}}>
                <input style={{backgroundColor:takeNote2Obj.colour}} onChange={takeTitle} type="text" name="Title" id="title" placeholder='Title'/>
                <img src={pin} alt="" className="imagenotes2" />
            </div>
            <input style={{backgroundColor:takeNote2Obj.colour}} onChange={takeDescription} type="text" name="Note" id="notes2" placeholder='Take a note....'/>
        </div>

        <div className="options">
            <div className="takenotes2images">
                <AddAlertOutlinedIcon/>
                <PersonAddAltOutlinedIcon/>
                <ColorPopper takeColor={takeColor} action='create'/>
                <ImageOutlinedIcon/>
                <ArchiveOutlinedIcon onClick={createArchive}/>
                <MoreVertOutlinedIcon/>
                <UndoOutlinedIcon/>
                <RedoOutlinedIcon/>
            </div>
            <div className="close">
                <h3 onClick={submit}>close</h3>
                {/* <Button variant="text">Text</Button> */}
            </div>
        </div>
        
    </div>
    </ClickAwayListener>
  )
}

export default TakeNote2
