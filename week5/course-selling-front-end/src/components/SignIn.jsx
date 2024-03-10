import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function SignIn() {
  return (
    <div>
      <div
        style={{
          marginTop: 150,
          marginBottom: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" paddingBottom={"1em"}>
          Welcome to Coursera! Sign up below
        </Typography>
      </div>
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
              Sign Up
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default SignIn;
