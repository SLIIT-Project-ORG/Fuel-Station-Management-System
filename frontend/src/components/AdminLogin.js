import React, { useState } from "react";
import axios from "axios";
import { Paper, Stack, TextField, Button, FormLabel } from '@mui/material';
import loginImage from '../images/LoginWallpaper.jpg';

export default function Login() {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newadmin = {
      username, password
    }

    axios.post("http://localhost:8000/admin/login/", newadmin).then((res) => {
      alert("Successfully Login.");
      console.log(res.data.data);
      // localStorage.setItem(res.data.data, "token")
      window.location.href = "/admin";
    }).catch((err) => {
      alert(err)
    })
  }


  return (
    <div>
      <Stack spacing={2} direction={'row'} sx={{ marginTop: '180px' }}>
        <Stack spacing={2} direction={'column'} flex={2}></Stack>
        <Stack spacing={2} direction={'column'} >
          <Stack spacing={2} direction={'row'}>
            <h2 style={{ fontFamily: 'revert', fontWeight: 'bold', color: 'red' }}>ADMIN LOGIN</h2>
          </Stack>
          <Paper sx={{ padding: '30px' }} variant='outlined'>
            <Stack direction={'row'} spacing={2}>
              <img src={loginImage} width="300px" />
              <form onSubmit={sendData}>
                <Stack spacing={2} direction={'column'} marginTop={'40px'}>
                  <TextField type='text' id="username" name="username" size="medium" label="Username" required onChange={
                    (e) => {
                      setusername(e.target.value);
                    }
                  }>Username</TextField>

                  <TextField type='password' id="password" name="password" size="medium" label="Password" required onChange={
                    (e) => {
                      setpassword(e.target.value);
                    }
                  }>Password</TextField>

                  <Button type="submit" color="primary" variant="contained" size="small">Sign In</Button>
                  <Button color="error" variant="contained" size="small" onClick={() => window.location.href = "/"}>Cancel</Button>
                </Stack>
              </form>
            </Stack>
          </Paper>
        </Stack>
        <Stack spacing={2} direction={'column'} flex={2}></Stack>
      </Stack>
    </div >
  )

}