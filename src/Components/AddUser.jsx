import { useState} from "react";
import { FormControl, FormGroup, TextField, Typography, styled, Button, } from "@mui/material";
import { addUser } from '../APIs/Api';
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
	width : 40%;
	margin : 80px auto 0 auto;
	& > div{
		margin-top : 20px;
	} 
`

const defaultvalue = {
	name : "",
	username : "",
	email : "",
	phone : ""
}

const AddUser = () => {

	const [user, setUser] = useState(defaultvalue)

	const onValueChange = (e) => {
		setUser({...user, [e.target.name]: e.target.value})
		console.log(user);
	};

	const navigate = useNavigate();

	const addUserDetails = async () => {
		await addUser(user);
		// console.log("Pressed");
		navigate("/all");
	}


	

	return(
		<Container>
			<Typography variant="h4" className="heading">Add New User</Typography>
			<FormControl>
			<TextField id="filled-basic" label="Name" variant="filled" onChange={ (e) => onValueChange(e)} name="name"/>
			</FormControl>
			<FormControl>
			<TextField id="filled-basic" label="Username" variant="filled" onChange={ (e) => onValueChange(e)} name="username"/>
			</FormControl>
			<FormControl>
			<TextField id="filled-basic" label="Email" variant="filled" onChange={ (e) => onValueChange(e)} name="email"/>
			</FormControl>
			<FormControl>
			<TextField id="filled-basic" label="Phone Number" variant="filled" onChange={ (e) => onValueChange(e)} name="phone"/>
			
			<Button variant="contained" sx={{mt : 1, ml : 25, mr : 25, background:'#b134eb'}} onClick={() => addUserDetails()}>ADD USER</Button>

			</FormControl>
		</Container>
	)
}
export default AddUser;