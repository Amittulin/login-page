import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <div class="bg-white flex">
          <div class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
            <div className="w-60">
              <img
                src="https://app.salescaptain.com/static/media/loginLogo.3814067f45867b0a416c.png"
                alt="logo"
              />
            </div>
            <h1 class="font-bold text-2xl my-10 text-black"> Login </h1>
            <form action="" class="mt-2 flex flex-col lg:w-1/2 w-8/12">
              <div class="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
                <div class="flex -mr-px justify-center w-15 p-4">
                  <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                    <i class="fas fa-user-circle"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-2 h-10 border-grey-light  rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                  placeholder="Email"
                />
              </div>
              <div class="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                <div class="flex -mr-px justify-center w-15 p-4">
                  <span class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-2 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                  placeholder="Password"
                />
                <div class="flex -mr-px">
                  <span class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                    <i class="fas fa-eye-slash"></i>
                  </span>
                </div>
              </div>

              <a
                href="/"
                class="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
              >
                Sign In
              </a>
              <a
                href="#"
                className="text-base text-blue text-right font-roboto leading-normal hover:underline mb-6 forgot"
              >
                Forgot Password{" "}
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
