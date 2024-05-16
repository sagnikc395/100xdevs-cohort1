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
            marginTop:"20px"
          }}
        >
          Username - <input type={"text"} />
          <br />
          Password - <input type={"password"} />
          <br />
          <button>Sign Up</button>
        </div>
      </center>
    </div>
  );
}
