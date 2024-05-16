import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h2">Home</Typography>
                 <Button variant="contained">Login</Button>
                 <Button variant="contained">
                       <Link to='/reg'>Signup</Link>
                   </Button>

                   <Button variant ="contained">
                         <Link to='/u'>Button</Link>
                    </Button>
                    <Button variant="contained">
                      <Link to='/c'>Counter</Link>
                    </Button>
                    <Button variant="contained">
                      <Link to='/use'>Use</Link>
                      </Button>
                      <Button variant="contained">
                        <Link to='/view'>View</Link>
                      </Button>
        </Toolbar>
        </AppBar>
    </div>
  );
}

export default Navbar