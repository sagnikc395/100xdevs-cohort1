function Signup() {
  return (
    <>
      <center>
        <div style={{ marginTop: 150, marginBottom: 10 }}>
          Welcome to Coursera! SignUp Below{" "}
        </div>
      </center>
      <center>
        <div
          style={{ border: "2px solid black", width: "400px" }}
        >
          <div>
            Username : <input type="text"></input>
            <br />
            Password : <input type="password"></input>
          </div>
          <br />
          <button>Sign Up</button>
        </div>
      </center>
    </>
  );
}

export default Signup;
