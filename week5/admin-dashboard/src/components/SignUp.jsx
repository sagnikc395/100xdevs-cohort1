import { Button, TextField, Card, Typography } from "@mui/material";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">
          Welcome to Coursera. Sign up below.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          style={{
            width: "400px",
            padding: "20px",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              //set a fetch request , need to know what was sent here
              // const username = document.getElementById("username").value;
              // const password = document.getElementById("password").value;
              // // console.log(username.value);
              // console.log(password.value);

              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({ username, password }),
              }).then((res) => {
                //store the token
                res.json().then((data) => {
                  localStorage.setItem("token", data.token);
                });
              });
            }}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  );
}
