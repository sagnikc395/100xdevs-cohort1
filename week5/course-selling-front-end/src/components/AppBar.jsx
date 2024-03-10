import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function AppBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: '2em',
      }}
    >
      <Typography variant="h4">
        Coursera
      </Typography>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button variant="contained">Sign Up</Button>
        </div>
        <div>
          <Button variant="contained">Sign In</Button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
