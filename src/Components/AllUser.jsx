import { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';

import {getUsers, deleteUser} from '../APIs/Api.js';


import { Link } from 'react-router-dom';



const AllUser = () => {

	const [users, setUsers] = useState([]);


	useEffect(() => {
		getAllUser();
	}, []); //this useEffect will follow property of componentDidMount means it will call only once while mounting in browser
	
	const getAllUser = async () => {
		const response = await getUsers(); 
		setUsers(response.data);//api response will store in this state as users
	}

	const deleteUserDetails = async (id) => {
		await deleteUser(id);
		getAllUser();
	}

	const StyledTable = styled(Table)`
		width : 80% ;
		margin : 50px auto 0 auto ;
		borderRadius : 5px
	`

	const THead = styled(TableRow)`
		background : #b134eb;
		border : 2px solid black;
		& > th {
			color: #ffffff;
			font-size : 20px;
			font-weight : 600;
		}
	`
	const TRow = styled(TableRow)`

	border : 2px solid black;
	& > td {
		font-size : 20px;

	}
	` 

	

	return(
		<StyledTable>
			<TableHead>
				<THead>
					<TableCell>Id</TableCell>
					<TableCell>Name</TableCell>
					<TableCell>Username</TableCell>
					<TableCell>Email</TableCell>
					<TableCell>Phone</TableCell>				
					<TableCell></TableCell>				
				</THead>
			</TableHead>
			<TableBody>
				{
					users.map(users => (
						<TRow key={users._id}>
							<TableCell>{users._id}</TableCell>
							<TableCell>{users.name}</TableCell>
							<TableCell>{users.username}</TableCell>
							<TableCell>{users.email}</TableCell>
							<TableCell>{users.phone}</TableCell>
							<TableCell>
								<Button variant='contained' style={{marginRight:30}} component={Link} to={`/edit/${users._id}`} >Edit</Button>
								<Button variant='contained' color='error' onClick={()=>deleteUserDetails(users._id)}>Delete</Button>
							</TableCell>
						</TRow>
					))
				}
			</TableBody>
		</StyledTable>
	)
}

export default  AllUser;