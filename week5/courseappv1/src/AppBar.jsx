import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();
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
              //window.location = "/signup";
              navigate("/signup");
            }}
          >
            SignUp
          </Button>
        </div>
        <div style={{ marginRight: 10 }}>
          <Button
            variant="contained"
            onClick={() => {
              // "/login";
              navigate("/signin");
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
