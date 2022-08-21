import React, { useState } from "react";
import "./CheckPassword.css";
import Done from "../../Icons/Done";
import NotOk from "../../Icons/NotOk";

export default function CheckPassword({ password }) {
  const [safe1, setSafe1] = useState(false);
  const [safe2, setSafe2] = useState(false);
  const [safe3, setSafe3] = useState(false);

  const checkPassword = () => {
    function isUpper(str) {
      return /.*[A-Z].*/.test(str);
    }
    function containsNumber(str) {
      return /\d/.test(str);
    }

    if (password.length >= 8) {
      setSafe1(true);
    } else {
      setSafe1(false);
    }
    if (isUpper(password)) {
      setSafe2(true);
    } else {
      setSafe2(false);
    }
    if (containsNumber(password)) {
      setSafe3(true);
    } else {
      setSafe3(false);
    }
  };

  setTimeout(checkPassword, 100);

  return (
    <>
      <div className="checkpass">
        <div className="line1">
          <div className="icon-done">{safe1 ? <Done /> : <NotOk />}</div>
          <p className={`${safe1 ? "line1-text-light" : "line1-text"}`}>
            use at least 8 characters
          </p>
        </div>

        <div className="line2">
          <div className="icon-done">{safe2 ? <Done /> : <NotOk />}</div>
          <p className={`${safe2 ? "line1-text-light" : "line1-text"}`}>
            use at least one uppercase
          </p>
        </div>

        <div className="line3">
          <div className="icon-done">{safe3 ? <Done /> : <NotOk />}</div>
          <p className={`${safe3 ? "line1-text-light" : "line1-text"}`}>
            use at least one number
          </p>
        </div>
      </div>
    </>
  );
}
