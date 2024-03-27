import "../css/Login.css";
import { Buttons } from "../component/Hero";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // console.log({ email, password, check });
  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleCheck(e) {
    setCheck(e.target.checked);
  }

  function handleLogin() {
    // checking if the input field is not empty
    if (!email) {
      return toast("Enter Email ", {
        theme: "light",
      });
    } else if (!password) {
      return toast("Enter Password", {
        theme: "light",
      });
    }
    // !email || !password ? toast.error(error.message) :

    setIsSubmit(true);

    const payload = { username: email, password, check };
    // console.log({ payload });

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          const data = await response.json();
          throw data;
        }
        return response.json();
      })
      .then((response) => {
        response && navigate(-1);
      })

      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsSubmit(false);
      });
  }

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
            onChange={handleEmail}
          >
            Email address or username
          </SimpleForm>
          <SimpleForm
            name="pwd"
            type="password"
            placeholder="Password"
            closed="../../assets/eye-slash.svg"
            opened="../../assets/eye.svg"
            onChange={handlePassword}
          >
            Password
          </SimpleForm>
        </div>
        <a href="#/">Forget your passworld?</a>
        <div className="mini">
          <div>
            <input type="checkbox" id="box" onClick={handleCheck} />
            <label htmlFor="box">Remember me</label>
          </div>
          <Buttons type="green-btn" login={handleLogin} disabled={isSubmit}>
            Log In
          </Buttons>
        </div>

        <hr />
        <p>Don't have an account?</p>
        <Buttons type="long-white-btn space-btn">Sign up for Spotify</Buttons>
      </main>
    </div>
  );
}

function SimpleForm({
  name,
  type,
  placeholder,
  closed,
  opened,
  onChange,
  children,
}) {
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
          onChange={onChange}
        />
        <img
          src={view ? opened : closed}
          onClick={handleView}
          alt={opened || closed ? "eye" : ""}
          className="eye"
        />
      </div>
    </div>
  );
}
