"use client";

import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import SubMenu from "../(subMenu)/SubMenu";
import { MenuItems } from "../(allLinks)/Links";
import { Settings } from "../(allLinks)/Links";
const Sidebar = () => {
  return (
    <div className=" w-[260px]  overflow-y-scroll py-10 no-scrollbar transition-all h-full">
      <div className=" w-full text-[15px] text-nowrap">
        <div className=" flex  flex-col ">
          {
            <h2 className=" text-[#707070] px-[20px] text-[18px] ">
              Dashboard
            </h2>
          }
          {MenuItems?.map((item, index) =>
            item?.href ? (
              <Link href={item?.href} key={index}>
                <div className=" text-[#707070]  my-[15px] px-[20px] rounded-md flex justify-between items-center">
                  <div className="flex items-center gap-5">
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
        <div className="pt-6 mt-6 border-t border-blue-300 ">
          <div className="rounded-md transition w-9/12 max-md:w-full  py-2 ">
            <div className="flex  flex-col">
              {
                <h2 className=" text-[#707070] px-[20px] text-[18px] ">
                  Setting
                </h2>
              }
              {Settings?.map((item: any, index) => (
                <div className="" key={index}>
                  <Link
                    href={item?.href}
                    className={`  text-[#707070]  my-[15px] px-[20px] rounded-md flex justify-between items-center`}
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-2xl ">{item?.icon}</span>
                      <span className="">{item?.label}</span>
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
