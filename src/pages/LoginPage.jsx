import "../css/Login.css";
import { Buttons } from "../component/Hero";
import { useState } from "react";

export default function LoginPage() {
  return (
    <div>
      <div className="spotify-black">
        <img src="../../assets/spotify-black.svg" alt="" />
      </div>

      <main>
        <div className="group-btn">
          <Buttons type="long-btn">
            <div className="icons">
              <img src="../../assets/round-facebook.svg" alt="" /> continue with
              facebook
            </div>
          </Buttons>
          <Buttons type="long-black-btn">
            <div className="icons">
              <img src="../../assets/apple.svg" alt="" /> continue with apple
            </div>
          </Buttons>
          <Buttons type="long-white-btn">
            <div className="icons">
              <img src="../../assets/google.svg" alt="" /> continue with google
            </div>
          </Buttons>
        </div>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="simpleform">
          <SimpleForm
            name="user"
            type="text"
            placeholder="Email address or username"
            closed=""
            opened=""
          >
            Email address or username
          </SimpleForm>
          <SimpleForm
            name="pwd"
            type="password"
            placeholder="Password"
            closed="../../assets/eye-slash.svg"
            opened="../../assets/eye.svg"
          >
            Password
          </SimpleForm>
        </div>
        <a href="#/">Forget your passworld?</a>
        <div className="mini">
          <div>
            <input type="checkbox" id="box" />
            <label htmlFor="box">Remember me</label>
          </div>
          <Buttons type="green-btn">Log In</Buttons>
        </div>

        <hr />
        <p>Don't have an account?</p>
        <Buttons type="long-white-btn space-btn">Sign up for Spotify</Buttons>
      </main>
    </div>
  );
}

function SimpleForm({ name, type, placeholder, closed, opened, children }) {
  const [view, setView] = useState(false);

  function handleView() {
    setView(() => !view);
  }

  return (
    <div>
      <div className="input-form">
        <label htmlFor={name}>{children}</label> <br />
        <input
          type={view ? "text" : type}
          placeholder={placeholder}
          id={name}
        />
        <img
          src={view ? opened : closed}
          onClick={handleView}
          alt=""
          className="eye"
        />
      </div>
    </div>
  );
}
