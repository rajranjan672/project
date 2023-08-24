import React from 'react'
import { Box, Paper } from '@mui/material';
import axios from 'axios';

export default function Travel() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    result();
  }, []);

  const result = async () => {
    const res = await axios.get("http://localhost:3001/api/Travel/getTravel");
    setData(res.data);
    console.log(res.data);
  };
  return (
    <>
    <h2>Travel</h2>
    <div classNameName='container'>
          <div classNameName='row'>
         {data.map((i) =>{
          return(
            <Paper key={i.id} classNameName='paper col-10 col-sm-5 col-md-3 col-lg-5 my-3 py-1 mx-3' elevation={20} >
              {i.price}
            </Paper>

          )
         })}
          
          <div className="card" style="width: 18rem;">
          <img src="..." className="card-img-top" alt="..."/>
       <div className="card-body">
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
       </div>
        

          </div>
        </div>








    </>
  )
}
