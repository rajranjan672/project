import React from 'react'
import "./FoodRecipies.css";
import { Box, Paper } from '@mui/material';

const FoodRecipies = () => {
  return (
    <>
        <h2  className="centr">FoodRecipies</h2>
        <div className='container'>
          <div className='row'>
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
          </div>
        </div>
     

        </>
  )
}

export default FoodRecipies