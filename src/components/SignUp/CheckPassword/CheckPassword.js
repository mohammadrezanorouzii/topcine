import React, { useEffect, useState } from "react";
import Done from "../../../Icons/Done";
import NotOk from "../../../Icons/NotOk";

export default function CheckPassword({ password }) {
  const [safe1, setSafe1] = useState(false);
  const [safe2, setSafe2] = useState(false);
  const [safe3, setSafe3] = useState(false);

  function countTrue(a, b, c) {
    return [a, b, c].filter(Boolean).length;
  }

  useEffect(() => {
    if (password.length >= 8) {
      setSafe1(true);
    } else {
      setSafe1(false);
    }
    if (/.*[A-Z].*/.test(password)) {
      setSafe2(true);
    } else {
      setSafe2(false);
    }
    if (/\d/.test(password)) {
      setSafe3(true);
    } else {
      setSafe3(false);
    }
  }, [password]);

  return (
    <>
      <div className="flex gap-2 bg-LogInBackground p-3 flex-col rounded-2xl">
        <div className="flex flex-row gap-2">
          <div className="my-auto">{safe1 ? <Done /> : <NotOk />}</div>
          <p
            className={`text-textt text-lg ${
              safe1 ? " opacity-100" : "opacity-50"
            }`}
          >
            use at least 8 characters
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <div className="my-auto">{safe2 ? <Done /> : <NotOk />}</div>
          <p
            className={`text-textt text-lg ${
              safe2 ? " opacity-100" : "opacity-50"
            }`}
          >
            use at least one uppercase
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <div className="my-auto">{safe3 ? <Done /> : <NotOk />}</div>
          <p
            className={`text-textt text-lg ${
              safe3 ? " opacity-100" : "opacity-50"
            }`}
          >
            use at least one number
          </p>
        </div>
        <progress
          className="progress progress-success"
          value={countTrue(safe1, safe2, safe3) * 34}
          max="102"
        ></progress>
      </div>
    </>
  );
}
