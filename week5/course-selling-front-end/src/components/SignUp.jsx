import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

function SignUp() {
  return (
    <div>
      <center>
        <div style={{ marginTop: 150, marginBottom: 10 }}>
          Welcome to Coursera! Sign up below
        </div>
      </center>
      <center>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="outlines-basic"
            label="Password"
            variant="filled"
          />
          <br />
          <br />
          <Button size={"large"} variant="contained">
            Sign Up
          </Button>
        </Card>
      </center>
    </div>
  );
}
export default SignUp;
