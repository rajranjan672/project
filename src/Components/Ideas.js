import * as React from 'react';
import { useState, useEffect } from 'react';
import "../Components/Ideas.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import { FormControlLabel, Slider, TextField, Checkbox, Avatar } from '@mui/material';
import Swal from 'sweetalert2';

import { Formik, Form, Field, ErrorMessage, validateYupSchema, FastField } from 'formik';
import * as Yup from 'yup'
import { Box, Fade, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import nvbg from '../Assets/nvbg.png'
import PostIdea from './PostIdea';
import axios from 'axios';


 function Ideas() {
  const [idea, setIdea] = useState([])

  const avatarBgColor = (item) => {
    
    if (item.title.charAt(0) === "A")  {
      return 'pink';
    }
    if (item.title.charAt(0) === "B") {
      return 'black';
    }
   
   if (item.title.charAt(0) === "C") {
      return 'black';
    }
    
     if (item.title.charAt(0) === "U" ) {
      return 'orange';
    }

    if (item.title.charAt(0) === "R")  {
      return 'red';
    }
    if (item.title.charAt(0) === "M") {
      return 'black';
    }
   
   if (item.title.charAt(0) === "S") {
      return 'green';
    }
    
     if (item.title.charAt(0) === "A" ) {
      return 'orange';
    }
     else {
      return 'blue';
    }
  };

  useEffect(() => {
    response()
  }, [])

  const response = async() => {
    const res = await axios.get("http://localhost:3001/api/ideas/getIdeas")
    setIdea(res.data)
    // console.log("data" ,res.data)
  }
  
 
  return (
    <>
    <PostIdea getData={response()} />

    {/* <img src={nvbg} alt="img" className='servic' /> */}
    

    <div className='idea '>
      
      <div>
      <div className='container'>
          <div className='row'>
        {idea.map((item) => {
           return(
          <Card key={item.id} className='card col-10 col-sm-4 col-md-4 col-lg-4 my-3 py-1 mx-1' >
      <Avatar sx={{ bgcolor: avatarBgColor(item) }} >
            {item.title.charAt(0).toUpperCase()}
          </Avatar>
      <CardContent>
      
        <Typography color={'#d34cf5'} gutterBottom variant="h5" component="div">
         Title: {item.title}
        </Typography>
        <Typography variant="body2" color="text.black">
        TYPE: {item.type}
        </Typography>
        <Typography variant="body2" color="text.black">
        Description: {item.description}
        </Typography>
      </CardContent>
      <CardActions className='btn'>
        <Button  variant='contained' size="small" className='editicon1'><EditIcon/></Button>
        <Button  variant='contained' size="small" className='deleteicon1'> <DeleteIcon/> </Button>
      </CardActions>
    </Card>
           )
        })}
        </div>
        </div>
    
    </div>
    <br/><br/>
    {/* <div >
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
    </div> */}
    {/* <div >
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
    </div> */}

    {/* <div >
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
    </div> */}
    </div>
    </>
  );
}
export default Ideas;