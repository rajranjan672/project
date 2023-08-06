import React, { useEffect, useState } from 'react'
import "./Travel.css";

import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// import Typography from '@mui/material/Typography';

const Travel = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    result();
  }, []);

  const result = async() => {
    const res = await axios.get("http://localhost:3001/api/Travel/getTravel");
    setData(res.data);
    console.log(res.data);


  return (
    
   <>
        <h2  className="centr">Travel</h2>
        <div className='container'>
          <div className='row'>
   {data.map((item) => {
      return(
      <div  >
      {/* <Paper  className='paper col-10 col-sm-5 col-md-3 col-lg-3 my-3  mx-3' elevation={20}>
      <Typography>{item.Location}</Typography> */}
        <Card sx={{ maxWidth: 345 }} key={item.id}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.Location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>


        
      {/* </Paper> */}
      </div>
          )})}
          </div>
        </div>
   
        
   
   </>

  )
}
}
export default Travel