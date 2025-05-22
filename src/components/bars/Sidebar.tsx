"use client";

import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import SubMenu from "../(subMenu)/SubMenu";
import { MenuItems } from "../(allLinks)/Links";
import { Settings } from "../(allLinks)/Links";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className=" w-[260px]  overflow-y-scroll py-10 no-scrollbar transition-all h-full">
      <div className=" w-full text-[15px] text-nowrap">
        <div className=" flex  flex-col ">
          {
            <h2 className=" mb-5 text-[#707070] px-[40px] text-[18px] ">
              Dashboard
            </h2>
          }
          {MenuItems?.map((item, index) =>
            item?.href ? (
              <Link href={item?.href} key={index}>
                <div
                  className={` ${
                    pathname === item?.href && "bg-[#4070f4]  text-white"
                  } hover:bg-[#4070f4] py-3 hover:text-white text-[#707070] px-5   mx-[20px] rounded-md flex justify-between items-center`}
                >
                  <div className="flex items-center gap-7">
                    <span className="text-2xl ">{item?.icon}</span>
                    <span className="">{item?.label}</span>
                  </div>

                  {item?.hasSubmenu && (
                    <FaChevronRight
                      className={`text-sm transition-transform `}
                    />
                  )}
                </div>
              </Link>
            ) : (
              <div key={index} className="">
                <SubMenu item={item} />
              </div>
            )
          )}
        </div>
        {/* Bottom: Settings */}
        <div className="">
          <div className="rounded-md transition w-full   ">
            <div className="flex  flex-col">
              {
                <h2 className=" text-[#707070] px-5 mx-[20px] text-[18px] ">
                  Setting
                </h2>
              }
              {Settings?.map((itm: any, idx) => (
                <div key={idx} className=" mx-[20px] ">
                  <Link
                    href={itm?.href}
                    className={`
                ${pathname === itm?.href && "bg-[#4070f4]  text-white"}
                hover:bg-[#4070f4]  py-3 px-5 hover:text-white text-[#707070] rounded-md flex justify-between items-center
                `}
                  >
                    <div className="flex items-center gap-7">
                      <span className="text-2xl ">{itm?.icon}</span>
                      <span className="">{itm?.label}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
