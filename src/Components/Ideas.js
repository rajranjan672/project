import * as React from 'react';
import { useState } from 'react';
import "../Components/Ideas.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import { FormControlLabel, Slider, TextField, Checkbox } from '@mui/material';
import Swal from 'sweetalert2';

import { Formik, Form, Field, ErrorMessage, validateYupSchema, FastField } from 'formik';
import * as Yup from 'yup'
import { Box, Fade, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import nvbg from '../Assets/nvbg.png'
import PostIdea from './PostIdea';


 function Ideas() {
  
  
 
  return (
    <>
    <PostIdea />

    {/* <img src={nvbg} alt="img" className='servic' /> */}
    

    <div className='idea me-1'>
      
      <div style={{justifyContent:'space-between'}}>
        
    <Card className='card' sx={{ maxWidth: 310 ,variant:"outlined" }} >
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.black">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small" className='editicon1'><EditIcon/></Button>
        <Button  variant='contained' size="small" className='deleteicon1'> <DeleteIcon/> </Button>
      </CardActions>
    </Card>
    </div>
    <br/><br/>
    <div >
    <Card className='card' sx={{ maxWidth: 310, alignItems:'right'}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.black">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small" className='editicon1'><EditIcon/></Button>
        <Button  variant='contained' size="small" className='deleteicon1'><DeleteIcon/> </Button>
      </CardActions>
    </Card>
    </div>
    <div >
    <Card className='card' sx={{ maxWidth: 310, }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.black">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small" className='editicon1'><EditIcon/></Button>
        <Button  variant='contained' size="small" className='deleteicon1'><DeleteIcon/> </Button>
      </CardActions>
    </Card>
    </div>

    <div >
    <Card className='card' sx={{ maxWidth: 310, alignItems:'right'}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.black">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small" className='editicon1'><EditIcon/></Button>
        <Button  variant='contained' size="small" className='deleteicon1'><DeleteIcon/> </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </>
  );
}
export default Ideas;