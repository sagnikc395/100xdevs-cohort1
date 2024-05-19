import { TextField, Card, Button } from "@mui/material";
import { useState } from "react";
function AddCourse() {
  const [title, setTitle] = useState();
  const [descp, setDescp] = useState();
  return (
    <div
      style={{
        paddingTop: 150,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        variant="outlined"
        style={{
          width: "400px",
          padding: "20px",
        }}
      >
        <TextField
          fullWidth={true}
          label="Title"
          variant="outlined"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>

        <TextField
          fullWidth={true}
          label="Description"
          variant="outlined"
          type="text"
          onChange={(e) => setDescp(e.target.value)}
        ></TextField>
        <Button
          size={"large"}
          variant="contained"
          onClick={() => {
            fetch("http://localhost:3000/admin/courses", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
              },
              body: JSON.stringify({
                title,
                descp,
                published: true,
                imageLink: "",
              }),
            });
          }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}

export default AddCourse;
