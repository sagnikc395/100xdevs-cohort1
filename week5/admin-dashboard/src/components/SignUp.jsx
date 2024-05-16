import { Button, TextField, Card, Typography } from "@mui/material";

export default function SignUp() {
  return (
    <div>
      <center>
        <div style={{ marginBottom: 10 }}>
          <Typography variant="h6">
            Welcome to Coursera. Sign up below.
          </Typography>
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
