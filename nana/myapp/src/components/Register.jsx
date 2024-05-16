import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <br /><br /><br /><br /><br />
      <TextField i label="username" variant="outlined" /><br/>
      <TextField label="email" variant="outlined" /><br/>
      <TextField label="name" variant="outlined" /><br/>
      <TextField label="password" variant="outlined" type="password"/><br/>
      <Button variant="contained">Signup</Button>

    </div>
  )
}

export default Register