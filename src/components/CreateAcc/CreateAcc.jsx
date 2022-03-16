import React, { useEffect, useState } from "react";
import Btn from "../Button/Btn";
import { useTheme } from "../../ThemeTwitter";
import Switch from "@mui/material/Switch";
import TwitterIcon from '@mui/icons-material/Twitter';

import "./CreateAcc.scss";

const Createacc = () => {
  //THEME
  const [dark, setDark] = useTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  // var minOffset = 0,
  //   maxOffset = 60; // Change to whatever you want
  // var thisYear = new Date().getFullYear();
  // var select = $("<select>");

  // for (var i = minOffset; i <= maxOffset; i++) {
  //   var year = thisYear - i;
  //   $("<option>", { value: year, text: year }).appendTo(select);
  // }

  // select.appendTo("body");
  //NAME
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  useEffect(() => {
    if (!name.trim()) setErrorName("Username required");
    else setErrorName("");
  }, [name]);

  //NUMBER
  const [number, setNumber] = useState("");
  const [errorNumber, setErrorNumber] = useState("");
  useEffect(() => {
    if (!number) setErrorNumber("Number required");
    else if (!/^[1-9]\d*(\.\d+)?$/.test(number))
      setErrorNumber("Number is invalid");
    else setErrorNumber("");
  }, [number]);

  //SUCCESS
  const [isSucces, setIsSucces] = useState(false);

  //BUTTON
  const handleClick = () => {
    if (!errorName) {
      const timeOut = setTimeout(() => {
        setIsSucces(true);
        clearTimeout(timeOut);
      }, 2000);
    }
  };
  return (
        <div className={dark ? "create" : "create create--dark"}>
          <a className="create__logo" href="#">
            <TwitterIcon className={dark ? "twitter" : "twitter twitter--dark"} />
          </a>

          <div className="create__acc">
            <h2 className={dark ? "title" : "title title--dark"}>Create an account</h2>
            <Switch  onClick={() => {setDark(state => !state)}} 
            className="switch" {...label}  />
          </div>

          <form>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={dark ? "name" : "name name--dark"}
              type="text"
              placeholder="Name"
            />
            <span className="name__error">{errorName}</span>

            <input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className={dark ? "number" : "number number--dark"}
              type="number"
              placeholder="Phone number"
            />
            <span className="number__error">{errorNumber}</span>
          </form>

          <a href="#">Use email</a>

          <span className={dark ? "create__date" : "create__date create__date--dark"}>Date of birth</span>

          <p className={dark ? "lorem" : "lorem lorem--dark"}>
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
            Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio
            enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit
            viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
            congue.
          </p>

          <div className="create__selects">
            <select className={dark ? "month" : "month month--dark"} defaultValue="month">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            <select className={dark ? "day" : "day day--dark"}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </select>

            <select className={dark ? "year" : "year year--dark"}>
              <option value="2022">2022</option>
            </select>
          </div>

          <Btn onClick={handleClick} className="btn--next">
            Next
          </Btn>
        </div>
  );
};

export default Createacc;
