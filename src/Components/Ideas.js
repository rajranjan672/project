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
  
  const [data, setData] = React.useState([]);

  const avatarBgColor = (item) => {
    if (item.title.charAt(0) === "R" )  {
      return 'red';
    }
    if (item.title.charAt(0) === "M") {
      return 'black';
    }
   
   if (item.title.charAt(0) === "S") {
      return 'green';
    }
     if (item.title.charAt(0) === "A") {
      return 'orange';
    }
     else {
      return 'blue';
    }
  };

  React.useEffect(() => {
    result();
  }, []);

  const result = async () => {
    const res = await axios.get("http://localhost:3001/api/ideas/getIdeas");
    setData(res.data);
    console.log(res.data);
  };

 
  return (
    <>
    <PostIdea getData={result()} />

    {/* <img src={nvbg} alt="img" className='servic' /> */}
    
<div className='container'>
  <div className='row'>
  {data.map((item) => {
    return(
    <Card className='card col-7 col-sm-4 col-md-2 col-lg-4 my-1 py-1 mx-1' key={item.id}>
       <Avatar sx={{ bgcolor: avatarBgColor(item) }} >
            {item.type.charAt(0).toUpperCase()}
          </Avatar>
      <Typography variant='body2'>Title: {item.title}</Typography>
      <Typography variant='body2'>Type: {item.type}</Typography>

          <Typography variant="body2" >
            Description{item.description}
          </Typography>

          <CardActions>
          <Button variant="contained"><EditIcon /></Button>
            <Button variant="contained" color='warning'><DeleteIcon /></Button>

          </CardActions>
    </Card>
)   })}
  </div>
</div>
  
   



   
    </>
  );
}
export default Ideas;