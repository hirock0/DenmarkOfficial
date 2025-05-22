"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
const SubMenu = ({ item }: any) => {
  const pathname = usePathname();
  const [subMenu, setSubMenu] = useState(false);
  return (
    <div
      className=""
      onClick={(e) => {
        e.stopPropagation(), setSubMenu(!subMenu);
      }}
    >
      <div className=" text-[#707070] cursor-pointer  my-[15px] px-5 mx-[20px] rounded-md flex justify-between items-center">
        <div className="flex items-center gap-5">
          <span className="text-2xl ">{item.icon}</span>
          <span className="">{item?.label}</span>
        </div>

        {item?.hasSubmenu && (
          <FaChevronRight className={`text-sm transition-transform `} />
        )}
      </div>
      <div>
        <div
          onClick={(e) => e.stopPropagation()}
          className={` ${!subMenu ? "hidden" : "block"}  pl-8 flex flex-col `}
        >
          {item?.submenu?.map((sub: any, idx: any) => (
            <Link href={sub?.href} key={idx}>
              <div
                className={` ${
                  pathname === sub?.href && "bg-[#4070f4]  text-white"
                }  hover:bg-[#4070f4] py-2 hover:text-white text-[#707070] px-5 mx-5  rounded-md flex justify-between items-center`}
              >
                {sub?.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
