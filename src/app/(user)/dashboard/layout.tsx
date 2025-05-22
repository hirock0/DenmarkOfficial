import Navbar from "@/components/bars/Navbar";
import Sidebar from "@/components/bars/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className=" sticky z-50 bg-[#E7F2FD] shadow-lg top-0">
        <Navbar />
      </div>
      <div className=" flex">
        <div className=" sticky  bg-[#E7F2FD]  top-[43px] z-40 h-[calc(100vh-43px)]">
          <Sidebar />
        </div>
        <div className=" w-full ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
