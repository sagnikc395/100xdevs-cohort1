import {Button, TextField} from '@mui/material'


export default function SignUp() {
  return ( 
    <div>
      <center>
        <div style={{ marginTop: 150, marginBottom: 10 }}>
          welcome to coursera. Sign up above.
        </div>
      </center>
      <center>
        <div
          style={{
            border: "2px solid black",
            width: "400px",
            marginTop:"20px",
            padding:"10px",
          }}
        >
          <TextField variant='outlined' label="Username" />
          <TextField variant='outlined' label="Password" />
          <Button variant="contained">Sign Up</Button>
        </div>
      </center>
    </div>
  );
}
