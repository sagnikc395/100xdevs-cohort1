import { Button, TextField, Card, Typography } from "@mui/material";

export default function Login() {
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
         Login below, welcome back.
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
          <TextField fullWidth variant="outlined" label="Email" type="text" />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
          />
          <Button size="large" variant="contained">
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
}
