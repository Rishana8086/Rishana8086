import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Use = () => {
    var[x,setx]=useState()
    const react=()=>{
        setx("React")
}
const angular=()=>{
    setx("angular")

}
const node=()=>{
  setx("node")
}
useEffect(()=>{
react();
},[])

  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography variant='h6'>Welcome to {x}</Typography><br/><br />
        <Button variant="contained" color="success"onClick={react}>React</Button>
         &nbsp;&nbsp;
        <Button variant="contained" color='error' onClick={angular}>Angular</Button>
        &nbsp;&nbsp;
        <Button variant="contained" color="success"onClick={node}>node</Button>
    </div> 
  )
}

export default Use