import { useState, useEffect} from "react";
import { FormControl, FormGroup, TextField, Typography, styled, Button, } from "@mui/material";
import {useNavigate, useParams} from 'react-router-dom';
//api 
import { editUser, getUser } from '../APIs/Api';


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

const EditUser = () => {

	const [user, setUser] = useState(defaultvalue);

	const navigate = useNavigate();
	const {id} = useParams();
	

	const editUserDetails = async () => {
		await editUser(user, id);
		navigate("/all");
	}

	
	const onValueChange = (e) => {
		setUser({...user, [e.target.name]: e.target.value})
		console.log(user);
	};
	
	useEffect(() => {
		const loadUserDetail = async () => {
			const response = await getUser(id);	
			setUser(response.data[0]);
		}
	
		loadUserDetail();
	}, [id]);

	

	return(
		<Container>
			<Typography variant="h4" className="heading">Edit User</Typography>
			<FormControl>
			<TextField id="filled-basic" label="Name" variant="filled" value={user.name} onChange={ onValueChange} name="name"/>
			</FormControl>
			<FormControl>
			<TextField id="filled-basic" label="Username" variant="filled" value={user.username} onChange={ onValueChange} name="username" />
			</FormControl>
			<FormControl>
			<TextField id="filled-basic" label="Email" variant="filled" value={user.email} onChange={ onValueChange} name="email" />
			</FormControl>
			<FormControl>
			<TextField id="filled-basic" label="Phone Number" variant="filled"  value={user.phone} onChange={ onValueChange} name="phone" />
			</FormControl>
			{/* <FormControl>
			<TextField id="filled-basic" label="Password" variant="filled" type={'password'} onChange={ (e) => onValueChange(e)}/>
			</FormControl> */}
			<FormControl>
			<Button variant="contained" sx={{mt : 1, ml : 25, mr : 25, background:'#b134eb'}} onClick={() => editUserDetails()}>EDIT USER</Button>

			</FormControl>
		</Container>
	)
}
export default EditUser;