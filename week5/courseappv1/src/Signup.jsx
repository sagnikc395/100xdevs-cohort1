import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";

function Signup() {
  return (
    <>
      <center>
        <div style={{ paddingTop: 150, marginBottom: 10 }}>
          <Typography variant="h6">Welcome to Coursera! SignUp Below</Typography>
        </div>
      </center>
      <center>
        <Card
          variant="outlined"
          style={{
            width: 400,
            padding: 20,
          }}
        >
          <TextField
            id="username"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth={true}
          />
          <br />
          <br />
          <Button size="large" variant="contained">
            SignUp
          </Button>
        </Card>
      </center>
    </>
  );
}

export default Signup;
