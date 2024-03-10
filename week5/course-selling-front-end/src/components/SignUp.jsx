function SignUp() {
  return (
    <div>
      <center>
        <div style={{ marginTop: 150, marginBottom: 10 }}>
          Welcome to Coursera! Sign up below
        </div>
      </center>
      <center>
        <div
          style={{
            border: "2px solid black",
            wdth: 400,
          }}
        >
          <div>
            Username <input type={"text"} />
          </div>
          <div>
            Password <input type={"password"} />
          </div>
          <button>Sign Up</button>
        </div>
      </center>
    </div>
  );
}
export default SignUp;
