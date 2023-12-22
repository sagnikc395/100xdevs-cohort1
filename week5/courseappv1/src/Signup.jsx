import { Button } from "@mui/material";
import { TextField } from "@mui/material";

function Signup() {
  return (
    <>
      <center>
        <div style={{ marginTop: 150, marginBottom: 10 }}>
          Welcome to Coursera! SignUp Below{" "}
        </div>
      </center>
      <center>
        <div style={{ border: "2px solid black", width: "400px", padding: 10 }}>
          <div>
            <TextField
              id="username"
              type="email"
              label="sagnikc@gmail.com"
              variant="outlined"
            />
            <TextField
              id="password"
              type="password"
              label="sagnikc#123"
              variant="outlined"
            />
          </div>
          <br />
          <Button variant="contained">SignUp</Button>
        </div>
      </center>
    </>
  );
}

export default Signup;
