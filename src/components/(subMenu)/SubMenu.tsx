"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
const SubMenu = ({ item }: any) => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <div
      className=""
      onClick={(e) => {
        e.stopPropagation(), setSubMenu(!subMenu);
      }}
    >
      <div className=" text-[#707070] cursor-pointer  my-[15px] px-[20px] rounded-md flex justify-between items-center">
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
          className={` ${
            !subMenu ? "hidden" : "block"
          }  pl-[35px] flex flex-col gap-5`}
        >
          {item?.submenu?.map((sub: any, idx: any) => (
            <Link href={sub?.href} key={idx}>
              <div className="text-[#707070]">{sub?.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
