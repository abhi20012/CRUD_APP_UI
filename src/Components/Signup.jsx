import React from "react";
import { FormGroup,Typography, FormControl,InputLabel,Input,Button } from "@mui/material";
import styled from "@emotion/styled";




const Container = styled(FormGroup)`
  margin: 80px  auto 0 auto;
//   background: yellow;
  width: 40%;
  padding : 10px;
  border-radius:12px;
  height:500px;
  & >  div{
    margin-top: 40px;
  }
`

const Btn = styled(Button)`
  margin:30px auto 0 auto;
  width:30%;
`

 const Signup = () => {

  return (
    <div>
      <Container>
        <Typography variant="h4">Register</Typography>
        <FormControl>
            <InputLabel htmlFor="my-input">Full Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text"  type='text'/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Email/Phone Number</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text"  type='text'/>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">Create Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text"  type='password'/>
        </FormControl>
        <Btn variant="contained">SignUp</Btn>
      </Container>
    </div>
  );
  }
export default Signup;
