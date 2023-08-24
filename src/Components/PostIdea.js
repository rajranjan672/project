


import { Box, Button, Fade, Modal, TextField, Typography } from '@mui/material'
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import Backdrop from '@mui/material/Backdrop';

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

const PostIdea = () => {
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
             content: '',
             method: '',
          //   description: '',
            // startingDate: '',
            // TC: false
            
            // password: ''
        }
        
      
         const validationSchema = Yup.object({
          // startingDate: Yup.date().required('Required*'),
           content: Yup.string().required('Required*'),
           title: Yup.string().required('Required*'),
           method: Yup.string().required('Required*'),
          // description: Yup.string().required('Required*'),
          // TC: Yup.bool().oneOf([true], 'You need to accept Terms and conditions*'),
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
      //   values.title, description: values.description, content: values.content
      //   }).then(() => 
      // resetForm({})
            
            //  resetForm({})
      //       // .then(() => props.getData)
      
            
      //   )
        //  .then (
              Swal.fire({
                  title: "Success",
                  text: "Plan Added",
                  icon: "success",
                  confirmButtonText: "OK",
                  customClass: {
                      container: 'my-swal'
                    }
              })
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
    <Typography id="transition-modal-description" sx={{ mt: 2 }}>Your Ideas
    </Typography>
    <hr />
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
                
                <Field className="field"
                 type="text" 
                 id='description'
                  name='description' 
                  label="Description"
                  as={TextField}
                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='description' /> 
               </div>
               
                <div className='inputs'>
                <label htmlFor="content">Content*</label>
                
                <FastField className="methods" component="textarea"
                 type="text" 
                 id='content'
                  name='content' 

                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='content' /> 
               </div> 


                <div className='error'>
                 <ErrorMessage name='password' /> 
               </div>

               
               <div className='button'>
                <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </div>
        </Form>
    </Formik>
    </Box>
    </Fade>
    </Modal>
    </>
  )
  
}

export default PostIdea

// const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
//   };

// const PostIdea = () => {

    // const [open, setOpen] = useState(false);
//   const handleOpen = () => {
    // console.log("handleOpen")
    // setOpen(true)
  
//   };
//   const handleClose = () => {
    // console.log("handleclose")
    // setOpen(false)}
    ;

    // const initialValues= {
      // email: '',
      
    //   title: '',
    //   content: '',
      // method: '',
    //   description: '',
      // startingDate: '',
      // TC: false
      
      // password: ''
//   }
  

//   const validationSchema = Yup.object({
    // startingDate: Yup.date().required('Required*'),
    // content: Yup.string().required('Required*'),
    // title: Yup.string().required('Required*'),
    // method: Yup.string().required('Required*'),
    // description: Yup.string().required('Required*'),
    // TC: Yup.bool().oneOf([true], 'You need to accept Terms and conditions*'),
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
//  })

//   const onSubmit =  (values, {resetForm}) => {
//    console.log('form data', values)
//   axios.post('http://localhost:3001/api/actionPlans/createActionPlans', {title:
//   values.title, description: values.description, content: values.content
//   }).then(() => 
// resetForm({})
      
//       resetForm({})
//       // .then(() => props.getData)

      
//   )
//   .then (
    //    Swal.fire({
    //        title: "Success",
    //        text: "Plan Added",
    //        icon: "success",
    //        confirmButtonText: "OK",
    //        customClass: {
    //            container: 'my-swal'
    //          }
    //    })
//   )
//   return (
    // <>
    // <div>
    //   <Button onClick={handleOpen} variant='contained'>ADD IDEAS</Button>
    //   </div>

      {/* <Modal
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
                
                <Field className="field"
                 type="text" 
                 id='description'
                  name='description' 
                  label="Description"
                  as={TextField}
                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='description' /> 
               </div>
               
                <div className='inputs'>
                <label htmlFor="content">Content*</label>
                
                <FastField className="methods" component="textarea"
                 type="text" 
                 id='content'
                  name='content' 

                 />
                </div>
                <div className='error'>
                 <ErrorMessage name='content' /> 
               </div> 


                <div className='error'>
                 <ErrorMessage name='password' /> 
               </div>

               
               <div className='button'>
                <Button variant="contained" color="primary" type='submit'>Submit</Button>
                </div>
             </Form>
             </Formik>
             </Typography>
           </Box>
         </Fade>
       </Modal> */}
    //    </>
//   )
// }}

// export default PostIdea