import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function AppBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2em",
      }}
    >
      <Typography variant="h3">coursera</Typography>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              window.location = "/signup";
            }}
          >
            Sign Up
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              window.location = "/signin";
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
