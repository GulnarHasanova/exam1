import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Index({data, index, handleDelete}) {
  return (
    <Card sx={{ minWidth: 275 }} key={index} className="col-3">
      <CardContent>
        <button className='btn-x btn btn-danger' onClick={()=>{handleDelete(data._id)}}>x</button>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <img className='sekil' src={data.img} alt="pic"/>
        </Typography>
        <Typography variant="h5" component="div">
         {data.field}
        </Typography>
        
        <Typography variant="body2">
         {data.comment}
        </Typography>
      </CardContent>
     
    </Card>
  )
}

export default Index