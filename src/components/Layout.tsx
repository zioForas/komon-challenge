import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="w-full text-gray-900 antialiased">
        <div className="relative">
          <div className="mx-auto md:max-w-[1024px]">
            <Header />
            <Content />
          </div>
        </div>
      </div>
      <footer className="sticky top-[100vh] left-0 w-full h-48 bg-[#323232]  ">
        {/*  footer  */}
      </footer>
    </>
  );
}

export default Layout;
