import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";

function AddCourse() {
  return (
    <>
      <Card
        variant="outlined"
        style={{
          width: 400,
          padding: 20,

          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField onChange={() => {}} fullWidth={true} label="" variant="" />
        <TextField onChange={() => {}} fullWidth={true} label="" variant="" />
      </Card>
      <Button size={"large"} varaint={"contained"} onClick={() => {}}>
        Add Course
      </Button>
    </>
  );
}

export default AddCourse;
