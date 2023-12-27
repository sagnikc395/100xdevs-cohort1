import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    function callback2(data) {
      //console.log(data);
      if (data.username) {
        setUserEmail(data.username);
        setIsLoading(false);
      }
    }

    function callback1(res) {
      res.json().then(callback2);
    }

    fetch(`http://localhost:3000/admin/me`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  //show some amount of loading state
  if(isLoading){
    return <div>Loading state .... </div>
  }

  if (userEmail) {
    //ugly
    return (
      <div
        style={{ display: "flex", justifyContent: "space-between", padding: 6 }}
      >
        <div style={{ backgroundColor: "#3b82f6" }}>
          <Typography variant="h5">coursera</Typography>
        </div>
        <div>{userEmail}</div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("token", null);
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }
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
