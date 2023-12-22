import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";


function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Welcome to Coursera! SignUp Below</Typography>
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
            width: 400,
            padding: 20,

            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            id={"username"}
            type="email"
            label="Email"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            id={"password"}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <Button
            size={"large"}
            variant="contained"
            onClick={() => {
              //get the ids
              // old way to do it
              // let username = document.getElementById("username").value;
              // let password = document.getElementById("password").value;
              // //send the fetch request to the backend simply

              //new way to do it
              setEmail(document.getElementById("username").value);
              setPass(document.getElementById("password").value);
              fetch(`http://localhost:3000/admin/signup`, {
                method: "POST",
                //body: JSON.stringify({ username, password }),
                //solving 403 by passing this header
                body: JSON.stringify({ email, pass }),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log(data);
                });
            }}
          >
            SignUp
          </Button>
        </Card>
      </div>
    </>
  );
}

export default Signup;
