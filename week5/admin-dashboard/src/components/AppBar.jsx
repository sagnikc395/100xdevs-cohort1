import { Button, Typography } from "@mui/material";

export default function AppBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ margin: 10 }}>
        <Typography variant="h6">Coursera</Typography>
      </div>
      <div style={{ margin: 10 }}>
        <Button
          variant="contained"
          onClick={() => {
            //route to /signup
            window.location = "/signup";
            // navigate("/signup");
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            //route to /login
            window.location = "/login";
            //navigate("/login");
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
