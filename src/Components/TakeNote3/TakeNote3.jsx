import React, { useState } from 'react'
import './TakeNote3.css'
import ColorPopper from '../colorPopper/ColorPopper';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import pin from '../Images/pin.png'
import { updateNotes } from '../../Services/DataServices';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
  // paddingtop : 0

};

function TakeNote3(props) {
    const [view, setView] = useState(false);
    const [editNote, setEditNote] = useState({});
    const handleChange = () => {
      setView(!view);
    }
    console.log(props)

  const [open, setOpen] = React.useState(false);
  const handleOpen = (note) => {
    console.log(note);
    setEditNote(note);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

    const updateArchive = () => {
      let data = {userId:props.note.id,
                  Title:props.note.Title,
                  Description:props.note.Description,
                  colour: props.note.colour,
                  isArchived: true
                }
      updateNotes(data).then((response) => console.log(response)).catch((error) => console.log(error))
    }

    const updateTrash = () => {
      let data = {userId:props.note.id,
                  Title:props.note.Title,
                  Description:props.note.Description,
                  colour: props.note.colour,
                  isArchived: props.note.isArchived,
                  isDelete: true
                }
      updateNotes(data).then((response) => console.log(response)).catch((error) => console.log(error))
    }

    const takeId = () => {
      setEditNote(prevState => ({...prevState, userId: props.note.id}))
    }

    const takeEditTitle = (event) => {
      setEditNote(prevState => ({...prevState, Title: event.target.value}))
    }

    const takeEditDescription = (event) => {
      setEditNote(prevState => ({...prevState, Description: event.target.value}))
    }

    const submit = () => {
      let data = {
                  userId:props.note.id,
                  Title:editNote.Title,
                  Description:editNote.Description,
                  colour: props.note.colour,
                  isArchived: props.note.isArchived,
                  isDelete : props.note.isDelete
      }
      updateNotes(data).then((response) => console.log(response)).catch((error) => console.log(error))
    }

  return (
    <div>
      <div className="savenotes3" onMouseEnter={handleChange} onMouseLeave={handleChange} style={{backgroundColor:props.note.colour}}>
        <div className="save">
            <div className="savetitle" onClick={()=>handleOpen(props.note)}>
                <div className="props">{props.note.Title}</div>
                {view && <img src={pin} alt="" className="image3" />}
            </div>
            <div className="savedescription" onClick={()=>handleOpen(props.note)}>
                <div>{props.note.Description}</div>
            </div>
        </div>
       {view && <div className="bottom3">
            <AddAlertOutlinedIcon fontSize="small"/>
            <PersonAddAltOutlinedIcon fontSize="small"/>
            <ColorPopper action='update' id={props.note.id} Title={props.note.Title} Description={props.note.Description} isArchived={props.note.isArchived} isDelete={props.note.isDelete}/>
            <ImageOutlinedIcon fontSize="small"/>
            <ArchiveOutlinedIcon fontSize="small" onClick={updateArchive} />
            <DeleteOutlineOutlinedIcon fontSize="small" onClick={updateTrash}/> 
            <MoreVertOutlinedIcon fontSize="small"/>
        </div> } 
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            {editNote.Title}
          </Typography> */}
          <div className="box">
              <input  className='titleInput' onChange={takeEditTitle} id="outlined-basic"  defaultValue={editNote.Title} variant="outlined" />
              {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {editNote.Description}
              </Typography> */}
              <input  className='descInput' onChange={takeEditDescription} id="outlined-basic"  defaultValue={editNote.Description} variant="outlined" />
          </div>
          <div className="editicons">
              <div className="takenotes2images">
                    <AddAlertOutlinedIcon/>
                    <PersonAddAltOutlinedIcon/>
                    <ColorPopper  />
                    <ImageOutlinedIcon/>
                    <ArchiveOutlinedIcon onClick={updateArchive}/>
                    <MoreVertOutlinedIcon/>
                    <UndoOutlinedIcon/>
                    <RedoOutlinedIcon/>
                </div>
                <div className="close">
                  <Button onClick={submit} variant="text" >close</Button>
                    {/* <Button variant="text">Text</Button> */}
                </div>
          </div>
          
        </Box>
      </Modal>
    </div>
  )
}

export default TakeNote3
