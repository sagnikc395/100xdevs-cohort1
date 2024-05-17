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
        <Button variant="contained">Sign Up</Button>
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
}
