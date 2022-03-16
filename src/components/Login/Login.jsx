import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeTwitter";
import Btn from "../Button/Btn";
import "./Login.scss";
import Switch from "@mui/material/Switch";
import TwitterIcon from '@mui/icons-material/Twitter';

const Login = () => {
  const [dark, setDark] = useTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  // //EMAIL
  // const emailRef = useRef();
  // const [email, setEmail] = useState("");
  // const [errorEmail, setErrorEmail] = useState("");
  // useEffect(() => {
  //   if (!emailRef.current.value) setErrorEmail("Email required");
  //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
  //     setErrorEmail("Email address is invalid");
  //   else setErrorEmail("");
  // }, [email]);

  // //PASSWORD
  // const passRef = useRef();
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   if (!passRef.current.value) setError("Password doesn't be empty");
  //   else if (password.length < 6)
  //     setError("Password needs to be 6 characters or more");
  //   else setError("");
  // }, [password]);

  const { state } = useLocation();
  const returnUrl = state?.returnUrl;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const data = {
  //   email: emailRef,
  //   password: passRef
  // };

  // const emailRef = useRef()
  // const passRef = useRef()


  const [error, setError] = useState("");

  const formOnSubmit = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        localStorage.setItem("token", res.token);

        if (returnUrl) {
          navigate(`${returnUrl.pathname} ${returnUrl.search}`, {
            state: {
              message: "success logged in",
            },
          });
        } else {
          navigate("/", {
            state: {
              message: "success logged in",
            },
          });
        }
      })
      .catch((err) => {
        setError("Login yoki parol xato", err);
      });
  };

  const handleChange = (e) => {
    setForm((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={dark ? "login" : "login login--dark"}>
      <a
        className={dark ? "login__logo" : "login__logo login__logo--dark"}
        href="#"
      >
        <TwitterIcon className={dark ? "twitter" : "twitter twitter--dark"} />
      </a>

      <div className="login__acc">
        <h2 className={dark ? "title" : "title title--dark"}>Log in to Twitter</h2>
        <Switch
          onClick={() => {
            setDark((state) => !state);
          }}
          className="switch"
          {...label}
        />
      </div>

      <form onSubmit={formOnSubmit}>
        <input
          onChange={handleChange}
          defaultValue="eve.holt@reqres.in"
          name="email"
          className={dark ? "email" : "email email--dark"}
          type="email"
          // ref={emailRef}
          value={form.email}
          placeholder="Phone number, email address"
          autoComplete="off"
        />
        {/* <span className={dark ? "email__text">{errorEmail}</span> */}

        <input
          onChange={handleChange}
          className={dark ? "password" : "password password--dark"}
          type="text"
          name="password"
          value={form.password}
          // ref={passRef}
          placeholder="Password"
          autoComplete="off"
        />

        {/* <span className={dark ? "password__text">{error}</span> */}
        <Btn
          type="submit"
          className={dark ? "btn--next" : "btn--next btn--next--dark"}
        >
          Log In
        </Btn>
      </form>

      <div
        className={dark ? "login__links" : "login__links login__links--dark"}
      >
        <a href="#">Forgot password?</a>
        <a href="#">Sign up to Twitter</a>
      </div>
    </div>
  );
};

export default Login;
