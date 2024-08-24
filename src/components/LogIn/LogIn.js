import React, { useState } from "react";
import styles from "./LogIn.module.scss";
import img1 from "../../pics/it.jpg";
import { Link } from "react-router-dom";

export default function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  // if one or both of email and pass was incorrect --> opacity of button = 0.7 and alert error
  // if one or both of email and pass was empty --> opacity of button = 0.7


  return (
    <div className='bg-LogInBackground w-full h-screen flex items-center justify-center'>
      <div
        className='rounded-2xl shadow-[20px 20px 40px rgba(0, 0, 0, 0.25)]
                  bg-no-repeat h-[90%] w-[95%]'
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className='bg-log-in-gradient w-full m-0 h-full rounded-2xl '>
            <div className='p-4'>
              <Link
                // className={styles.loginlogo}
              className='m-0 max-h-11 text-5xl bg-clip-text bg-scroll-gradient transparentLogo'
               to="/">
                {/* add here */}
                TopCine
              </Link>
            </div>

          <div className='ml-20 w-1/2'>
            <div className='mt-10 flex flex-row relative text-textt text-4xl'>
              <h1> Log in </h1>
            </div>
            <div className='flex flex-row gap-2 mt-4 mb-2'>
              <p className='text-textt text-xl opacity-50'> Dont have an account ? </p>
              <Link className='text-primaryy text-xl font-normal' to="/signup">
                Sign Up
              </Link>
            </div>

                
            <form className="w-3/4">
              <label
                className="group input flex items-center gap-3
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
                  // className={styles.inputemail}
                  className="grow border-none text-lg"
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
                  className="grow border-none text-lg"
                  value={password}
                  onChange={(e) => {
                    setPasswrod(e.target.value);
                  }}
                  required
                />
              </label>

              <div className='mb-4 flex flex-row '>
                <label className="cursor-pointer label flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox bg-textt w-4 rounded-sm h-4 checked:bg-primaryy"
                  />
                  <span className="text-textt text-md">Remember me</span>
                </label>
              </div>
                <input
                  type="submit"
                  className="btn hover:bg-secondary w-full text-textt text-xl bg-primaryy border-none rounded-xl "
                  value="Log In"
                />
            </form>
            </div>
        </div>
      </div>
    </div>
  );
}
