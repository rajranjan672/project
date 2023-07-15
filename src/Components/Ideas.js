import React from 'react'
import "../Components/Ideas.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Ideas = () => {
  return (
    <div className="idea">Ideas
    <DeleteIcon className='delete' />
    <EditIcon />
    </div>
  )
}

export default Ideas