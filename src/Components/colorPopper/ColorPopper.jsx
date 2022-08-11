import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { color } from '@mui/system';
import { updateNotes } from '../../Services/DataServices';

export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const colors = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"]

  const takeColor = (color) => {
    if(props.action=='create'){
      props.takeColor(color)
    }
    else if(props.action=='update'){
      let data = {userId:props.id,
                  Title:props.Title,
                  Description:props.Description,
                  colour: color,
                  isArchived:props.isArchived,
                  isDelete:props.isDelete
                  }
      updateNotes(data).then((response) => console.log(response)).catch((error) => console.log(error))
    }
    // else if(props.action == 'edit'){
    //   let data = {userId:props.id,
    //               Title:props.editNote.Title,
    //               Description:props.editNote.Description,
    //               colour: color,
    //               isArchived:props.editNote.isArchived
    //             }
    //             updateNotes(data).then((response) => console.log(response)).catch((error) => console.log(error))
    //   }
    }
  

  return (
    <div>
      <ColorLensOutlinedIcon onClick={handleClick}/>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex' }}>
          {colors.map(color => (<div onClick={() => takeColor(color)} style={{height:35, width:35, borderRadius:50, backgroundColor:color, marginLeft:10}}></div>))}
        </Box>
      </Popper>
    </div>
  );
}
