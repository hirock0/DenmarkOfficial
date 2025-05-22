"use client";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
  return (
    <div className=" px-[30px] py-[8px] flex items-center">
      <div className="">
        <div className=" flex gap-3 items-center">
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
          <h1 className=" text-[22px] text-[#4154f1] font-[600] tracking-[2px] uppercase">
            OUR-DENMARK
          </h1>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
