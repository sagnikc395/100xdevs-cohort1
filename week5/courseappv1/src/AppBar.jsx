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
          <Button
            variant="contained"
            onClick={() => {
              //route to signin
              //bad version
              window.location = "/signup";
            }}
          >
            SignUp
          </Button>
        </div>
        <div style={{ marginRight: 10 }}>
          <Button
            variant="contained"
            onClick={() => {
              window.location = "/login";
            }}
          >
            SignIn
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
