import React from 'react'
import "./FoodRecipies.css";
import { Box, Paper, Typography } from '@mui/material';
import axios from 'axios';

const FoodRecipies = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    result();
  }, []);

  const result = async () => {
    const res = await axios.get("http://localhost:3001/api/recipies/getRecipies");
    setData(res.data);
    console.log(res.data);
  };


  return (
    <>
        <h2  className="centr">FoodRecipies</h2>
        <div className='container'>
          <div className='row'>
            {data.map((item) => {
              return (
                <Paper key={item.id} className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} >
                <Typography>{item.name}</Typography>
                <Typography>{item.type}</Typography>
      
              </Paper>
              )
            })}
       
          {/* <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
=======
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} />
          <Paper className='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} /> */}
          </div>
        </div>
     

        </>
  )
}

export default FoodRecipies