import * as React from 'react';
import { useState } from 'react';
import "../Components/Ideas.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import { FormControlLabel, Slider, TextField, Checkbox } from '@mui/material';
import Swal from 'sweetalert2';

import { Formik, Form, Field, ErrorMessage, validateYupSchema, FastField } from 'formik';
import * as Yup from 'yup'
import { Box, Fade, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


 function Ideas() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("handleOpen")
    setOpen(true)
  
  };
  const handleClose = () => {
    console.log("handleclose")
    setOpen(false)}
    ;

    const initialValues= {
      // email: '',
      
      title: '',
      category: '',
      method: '',
      description: '',
      startingDate: '',
      TC: false
      
      // password: ''
  }
  

  const validationSchema = Yup.object({
    // startingDate: Yup.date().required('Required*'),
    category: Yup.string().required('Required*'),
    title: Yup.string().required('Required*'),
    method: Yup.string().required('Required*'),
    description: Yup.number().required('Required*'),
    TC: Yup.bool().oneOf([true], 'You need to accept Terms and conditions*'),
    // startingDate: Yup.string().required('Required*')
    //  password: Yup.string().required('Enter your Password*').matches(
    //      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character*"
    //  )
    //  file: Yup.mixed()
    //  .nullable()
    //  .required()
    //  .test(
    //    "FILE_SIZE",
    //    "Upload file is too big",
    //    (value) => !value || (value && value.size <= 1024*1024)
    //  )
    //  .test(
    //    "FILE_FORMAT",
    //    "Upload file has unsupported formate.",
    //    (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    //  )
 })

  const onSubmit =  (values, {resetForm}) => {
   console.log('form data', values)
//   axios.post('http://localhost:3001/api/actionPlans/createActionPlans', {title:
//   values.title, description: values.description, category: values.category, method: values.method
//   }).then(() => 
resetForm({})
      
//       resetForm({})
//       // .then(() => props.getData)

      
//   )
//   .then (
       Swal.fire({
           title: "Success",
           text: "Plan Added",
           icon: "success",
           confirmButtonText: "OK",
           customClass: {
               container: 'my-swal'
             }
       })
//   )
  
 }
  return (
    <>
    <div>
      <Button onClick={handleOpen} variant='contained'>ADD IDEAS</Button>
      </div>

      <Modal
         aria-labelledby="transition-modal-title"
         aria-describedby="transition-modal-description"
         open={open}
         onClose={handleClose}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
           timeout: 500,
         }}
       >
         <Fade in={open}>
           <Box sx={style}>
             <Typography id="transition-modal-title" variant="h6" component="h2">
               Ideas
             </Typography>
             <hr />
             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <Formik
                
                initialValues={initialValues}
                validationSchema={validationSchema}
                 onSubmit={onSubmit}
                >
             <Form>
                <div className='inputs'>
                <Field  className='field'
                variant="outlined"
                 type="text" 
                  id='title'
                   name='title'
                  label="Title"
                  as={TextField}
                  
                 />
                </div>
                 <div className='error'>
               <ErrorMessage name='title' />
               </div> 
               
              
               <div className='inputs'>
               <label htmlFor="category">Category*</label>

                <FastField className="field" component="select" name="category" placeholder="Selcet Category">
                  <option value=''>--Select--</option>
                  <option value="Indian">Indian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Maxican">Maxican</option>
                  <option value="Russian">Russian</option>

                </FastField>
                </div>
                <div className='error'>
               <ErrorMessage name='category' />
               </div> 
                
                <div className='inputs'>
                
                <Field className="field"
                 type="text" 
                 id='description'
                  name='description' 
                  label="Title"
                  as={TextField}
                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='description' /> 
               </div>
               
               <div className='inputs'>
                <label htmlFor="method">Method*</label>
                
                <FastField className="methods" component="textarea"
                 type="text" 
                 id='method'
                  name='method' 

                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='method' /> 
               </div>
               <div className='inputs'>
                
                <Field className="field"
                 type="checkbox" 
                 id='TC'
                  name='TC' 
                  label="T&C"
                  as={FormControlLabel}
                  control={<Checkbox color='success'/>}
                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='TC' /> 
               </div>

                <div className='error'>
                 <ErrorMessage name='password' /> 
               </div>

               
               <div className='button'>
                <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </div>
             </Form>
                  {/* )} */}
             </Formik>
             </Typography>
           </Box>
         </Fade>
       </Modal>
    

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
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small">Edit</Button>
        <Button  variant='contained' size="small">Delete</Button>
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
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small">Edit</Button>
        <Button  variant='contained' size="small">Delete</Button>
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
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small">Edit</Button>
        <Button  variant='contained' size="small">Delete</Button>
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
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small">Edit</Button>
        <Button  variant='contained' size="small">Delete</Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </>
  );
}
export default Ideas;