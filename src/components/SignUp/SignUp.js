import React, { useState } from "react";
import img1 from "../../pics/it.jpg";
import CheckPassword from "./CheckPassword/CheckPassword";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  // const [us, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [username, setUsername] = useState("");
  // const [emailFous, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);
  const [gender, setGender] = useState(0);

  // fetch("http://localhost:3000/signup", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     username: username,
  //     email: email,
  //     password: password,
  //     first_name: fname,
  //     last_name: lname,
  //     gender: gender,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then(function (response) {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     return Promise.reject(response);
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   })
  //   .catch(function (error) {
  //     console.warn("Something went wrong.", error);
  //   });

  return (
    <div className="bg-LogInBackground w-full h-screen flex items-center justify-center">
      <div
        className="rounded-2xl shadow-[20px 20px 40px rgba(0, 0, 0, 0.25)]
                  bg-no-repeat h-[90%] w-[95%]"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="relative flex flex-row-reverse w-full h-full rounded-2xl bg-sign-up-gradient">
          <div className="absolute top-[305px] left-[520px] flex flex-row">
            {passFocus && <CheckPassword password={password} />}
            {passFocus && (
              <div
                className="m-auto"
                style={{
                  borderTop: "15px solid transparent",
                  borderLeft: "30px solid #292a2d",
                  borderBottom: "15px solid transparent",
                }}
              />
            )}
          </div>

          <div className="h-full w-1/2">
            <form
              className="text-textt w-3/4 mt-28 mx-auto
                            "
            >
              <div className="">
                <p className="text-4xl text-textt">
                  Craete new account
                </p>
              </div>
              <div className="flex flex-row text-lg gap-2 mt-4 mb-2">
                <p className="text-lg opacity-50 "> Already a memeber ? </p>
                <Link className="text-secondaryy font-semibold" to="/login">
                  Log In
                </Link>
              </div>

              <label
                className="group input flex items-center gap-3 text-xl
                            h-16 rounded-xl py-2 text-textt 
                            mb-2 border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                  className="text-textt grow text-lg border-none focus:border-none"
                  placeholder="Username"
                />
              </label>

              <label
                className="group input flex items-center gap-3 text-xl
                            h-16 rounded-xl py-2 text-textt 
                            mb-2 border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  required
                  className="text-textt grow text-lg border-none focus:border-none"
                />
              </label>

              <label
                className="group input flex items-center gap-3 
                h-16 rounded-xl py-2 text-textt border-none
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  placeholder="Password"
                  type="password"
                  className="grow border-none text-lg text-textt "
                  value={password}
                  onChange={(e) => {
                    setPasswrod(e.target.value);
                  }}
                  required
                  onFocus={() => {
                    setPassFocus(true);
                  }}
                  onBlur={() => {
                    setPassFocus(false);
                  }}
                />
              </label>

              <div className="text-lg flex flex-row gap-2 text-textt mt-2 mb-4">
                <p className="opacity-70 ">
                  don't have any idea for your password ?
                </p>
                <Link
                  className="text-lg text-secondaryy font-semibold"
                  to="https://github.com/mohammadrezanorouzii/react-password-generator"
                >
                  Click Here
                </Link>
              </div>

              <div className="flex flex-row w-full ">
                <select
                  className="select select-info w-1/4 border-none"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Sex
                  </option>
                  <option value={gender}>Male</option>
                  <option value={gender}>Female</option>
                  <option value={gender}>Other</option>
                </select>

                <div className="w-full flex justify-end">
                  <input
                    type="submit"
                    className="w-2/3 bg-secondaryy text-textt text-xl border-none rounded-xl"
                    value="Sign Up"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
