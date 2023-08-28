import React from 'react'
import { Box, Paper, Typography } from '@mui/material';
import axios from 'axios';
import "../Components/Travel.css"

export default function Travel() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    result();
  }, []);

  const result = async () => {
    const res = await axios.get("http://localhost:3001/api/travel/getTravel");
    setData(res.data);
    console.log(res.data);
  };
  return (
    <>
    <h2 className='centr'>Travel</h2>
    <div className='container'>
          <div className='row'>
         {data.map((i) =>{
          return(
            <Paper key={i.id} className='paper col-10 col-sm-5 col-md-5 col-lg-5 my-3 py-1 mx-2' elevation={20} >
              <Typography>{i.destination}</Typography> 
              <Typography>{i.Location}</Typography> 
              
            </Paper>

          )
         })}
          
          {/* <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
       <div className="card-body">
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
       </div> */}
        

          </div>
        </div>








    </>
  )
}
