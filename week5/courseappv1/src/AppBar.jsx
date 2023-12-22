import { Typography } from "@mui/material";
import { Button } from "@mui/material";

function AppBar() {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 6 }}
    >
      <div style={{ backgroundColor: "#3b82f6" }}>
        <Typography variant="h5">coursera</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button variant="contained">SignUp</Button>
        </div>
        <div style={{ marginRight: 10 }}>
          <Button variant="contained">SignIn</Button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
