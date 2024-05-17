import { Button, Typography } from "@mui/material";

export default function AppBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{}}>
        <Typography variant="h6">Coursera</Typography>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            //route to /signup
            window.location = "/signup";
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            //route to /login
            window.location = "/login";
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
