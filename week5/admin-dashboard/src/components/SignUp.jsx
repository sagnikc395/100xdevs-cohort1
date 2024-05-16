import { Button, TextField, Card } from "@mui/material";

export default function SignUp() {
  return (
    <div>
      <center>
        <div style={{ marginTop: 150, marginBottom: 10 }}>
          welcome to coursera. Sign up above.
        </div>
      </center>
      <center>
        <Card
          variant="outlined"
          style={{
            width: "400px",
          }}
        >
          <TextField fullWidth variant="outlined" label="Email" />
          <br />
          <TextField fullWidth variant="outlined" label="Password" />
          <br />
          <Button size="large" variant="contained">
            Sign Up
          </Button>
        </Card>
      </center>
    </div>
  );
}
