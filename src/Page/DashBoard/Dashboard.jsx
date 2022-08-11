import React, { useState } from 'react'
import './Dashboard.css'
import Header from '../../Components/Header/Header'
import TakeNote1 from '../../Components/TakeNote1/TakeNote1'
import TakeNote2 from '../../Components/TakeNote2/TakeNote2'
import TakeNote3 from '../../Components/TakeNote3/TakeNote3'
import { getNotes } from '../../Services/DataServices'
import SideDrawer from '../../Components/drawer/Drawer'

function Dashboard() {
  const [view, setView] = useState(true);
  const  [notes, setNotes] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [noteType, setNoteType] = useState('notes')

  const getNote = () => {
    getNotes().then((response) => {
      const filterArray = response.data.filter((note)=>{
        if(noteType == 'notes'){
          if(note.isArchived === 0 && note.isDelete === 0){
            return note;
          }
        }
        
        if(noteType == 'archive'){
          if(note.isArchived === 1 && note.isDelete === 0){
            return note;
          }
        }
       
        if(noteType == 'delete'){
          if(note.isArchived === 0 && note.isDelete === 1){
            return note;
          }
        }
        
      })
      console.log(response);
      setNotes(filterArray);
    }).catch((error) => console.log(error))
  }

  console.log(notes);
  React.useEffect(() => {
    getNote()
  }, [noteType])


  const takeNote1 = () => {
    setView(!view)
  }

  const takeNote2 = () => {
    setView(!view)
  }

  const listenToHeader = () => {
    setOpen(!open)
  }

  const listenToSideNav = (value) => {
    setNoteType(value);
  }
  

  const mapNotes = notes.map((note) => <TakeNote3 note={note}/>)
  return (
    <div className='dashboard'>
      <div className="dashboardheaders"><Header listenToHeader={listenToHeader} li/></div>
      <div className="dashdrawer"><SideDrawer open={open} listenToSideNav={listenToSideNav}/></div>
      <div className="dashdata">
        <div className="dashsave">{view ? <div><TakeNote1 takeNote1={takeNote1}/></div> : <div><TakeNote2 takeNote2={takeNote2}/></div>}</div>
        <div className='displayNotes'>{mapNotes}</div>
      </div>
      
    </div>
  )
}

export default Dashboard
