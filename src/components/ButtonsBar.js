import React from 'react'
import '../styles/ButtonsBar.css'
import CloseIcon from '@material-ui/icons/Close'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import EditIcon from '@material-ui/icons/Edit';
import LinkIcon from '@material-ui/icons/Link';
import CancelIcon from '@material-ui/icons/CancelPresentation';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const ButtonsBar = () => {
  return (
    <nav>
        <div className='button-box'>
            <div className='buttons'>
             <button style={{height: '30px', width: '100px'}}> <SaveAltIcon style={{heigh: '30px'}}/>Save</button>  <button  style={{height: '30px', width: '100px'}}> < EditIcon/>Edit</button>  <button  style={{height: '30px', width: '100px'}}> <CloseIcon/>Delete</button>  <button  style={{height: '30px', width: '100px'}}> <LinkIcon/>Links</button> <button  style={{height: '30px', width: '100px'}}> <CancelIcon/>Close</button> <button  style={{height: '30px', width: '100px'}}> <HelpOutlineIcon/>Help</button> 

            </div>

        </div>
    </nav>
  )
}

export default ButtonsBar