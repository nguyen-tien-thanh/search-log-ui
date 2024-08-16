import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../logo.svg";

const Layout = () => {
  return (
    <>
      <header className="shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-4">
              <Link to="/">
                <img src={logo} className="h-20 w-20 App-logo" alt="logo" />
              </Link>

              <div className="hidden md:flex md:gap-x-6">
                <Link
                  className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700  hover:text-slate-900 hover:underline underline-offset-2"
                  to="/form"
                >
                  Form
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <Link
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                color="blue"
                variant="solid"
                to="/login"
              >
                <span>Login</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
