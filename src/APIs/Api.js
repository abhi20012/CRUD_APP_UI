import axios from 'axios'; //to call apis


//const URL = "http://localhost:8000"; //connect client and server together, all the apis hit on this port
const URL = "https://crud-server-55m3.onrender.com";



//while calling api make sure to handle its error handling using try catch method
//addUser api 
export const addUser = async (data) => {
	try{
		return await axios.post(`${URL}/add` , data) //post api with api url and data
	} catch(error){
		console.log("Error while calling add user Api", error);
	}
}

//getUser api
export const getUsers = async () => {
	try{
		return await axios.get(`${URL}/all`)
	} catch(error){
		console.log("Error while calling getUser api", error);
	}
}

//edit user api after getting data of single user 
export const getUser = async (id) => {
	try{
		return await axios.get(`${URL}/${id}`)
	} catch(error){
		console.log('Error while calling getUser api', error);
	}
}

//api to edit user

export const editUser = async (user, id) => {
	try{
		return await axios.put(`${URL}/${id}`, user);
	} catch(error){
		console.log("Error while calling edit user api", error);
	}
}

//api to delete user 
export const deleteUser = async (id) => {
	try{
		return await axios.delete(`${URL}/${id}`);
	} catch(error){
		console.log("Error while calling delete user api", error);
	}
}