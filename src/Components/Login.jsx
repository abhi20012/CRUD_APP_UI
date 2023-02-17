import React from "react";
import { FormGroup,Typography, FormControl,InputLabel,Input,Button } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const Container = styled(FormGroup)`
  margin: 80px  auto 0 auto;
  // background: yellow;
  width: 40%;
  padding : 20px;
  border-radius:12px;
  height:400px;
  & >  div{
    margin-top: 40px;
  }
`



 const Login = () => {

  return (
    <div>
      <Container>
        <Typography variant="h4">LOG IN</Typography>
        <FormControl>
            <InputLabel htmlFor="my-input">Username/Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text"  type='password'/>
        </FormControl>
        <Button variant="contained" sx={{mt : 4, ml : 25, mr : 25, background:'#b134eb'}}>SUBMIT</Button>
        <Typography style={{marginTop:22}}>Not Registerd Yet? <Button style={{marginRight:30}} component={Link} to={"/signup"}>Signup</Button></Typography>


      </Container>
    </div>
  );
  }
export default Login;
