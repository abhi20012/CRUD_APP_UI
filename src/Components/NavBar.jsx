
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import { styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const BlackBar = styled(AppBar)`
background : #b134eb
`;

const Tags = styled(NavLink)`
font-size : 23px;
margin-right : 23px;
font-weight : 500;
color : #fff;
text-decoration : none
`


export default function NavBar() {
  return (
      <BlackBar position="static">
        <Toolbar>
			<Tags to='/'>Login/Register</Tags>
        	<Tags to='/add'>Add User</Tags>
        	<Tags to='/all'>All User</Tags>
        </Toolbar>
      </BlackBar>
    
  );
}