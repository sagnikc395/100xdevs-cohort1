import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

function SignIn() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1em",
        }}
      >
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              fullWidth={true}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1em",
            }}
          >
            <TextField
              fullWidth={true}
              id="outlines-basic"
              label="Password"
              variant="filled"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1em",
            }}
          >
            <Button size={"large"} variant="contained">
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default SignIn;
