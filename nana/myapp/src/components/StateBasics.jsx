import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'

const StateBasics= () => {
 // var name="Rishana"
 var[name,fname]=useState("Rishana")

 var[val,setval]=useState()
 var[sub,setsub]=useState()                                                                               

 const handleInput=(e)=>{
    setval(e.target.value);
 }
 const submitHandler=()=>{
  console.log("clicked")
  setsub(val)
 }

  return (
    <div style={{margin:'80px'}}>
    <Typography variant='h6'>Welcome to {sub}</Typography>
<br/>
<TextField variant="outlined" onChange={handleInput}/>
<Button variant='outlined' onClick={submitHandler}>submit</Button>
  </div>
  )
}

export default StateBasics