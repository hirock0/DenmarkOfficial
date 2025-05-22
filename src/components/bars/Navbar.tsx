"use client";
// import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { addMenuFlag } from "@/utils/redux/slices/slice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For navigating after logout
import swal from "sweetalert"; // Import sweetalert
import { IoIosMenu } from "react-icons/io";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
// import SideBar from "../sideBar/sideBar";
import { FiUser } from "react-icons/fi";
import { FaUnlockAlt } from "react-icons/fa";
import { BiPowerOff } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <div className=" px-[30px] py-[8px] flex items-center">
      <div className="">
        <div className=" flex gap-5 items-center">
          <button>
            <MdMenu className="text-[#4154f1] " size={25} />
          </button>
          <Image
            src={"https://order.denmarkofficial.online/images/logo.png"}
            alt="logo"
            width={500}
            height={500}
            className=" w-[35px] h-[35px]"
          />
          <h1 className=" text-[22px] text-[#4154f1] font-bold">OUR-DENMARK</h1>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
