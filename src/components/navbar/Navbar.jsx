import React from "react";
import { TbDashboard } from "react-icons/tb";
import { BsFillTagsFill } from "react-icons/bs";
import { AiOutlineSchedule, AiOutlineSetting } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav>
      <div
        className="h-screen w-fit bg-black text-white p-10 mt-1 ml-2
       flex flex-col justify-between rounded-3xl"
      >
        <div>
          <h3 className="text-3xl font-semibold pl-3 mb-5">Board.</h3>
          <div className="flex justify-items-start text-center items-center p-3">
            <TbDashboard className="text-white" />
            <a href="" className="pl-3">
              Dashboard
            </a>
          </div>
          <div className="flex justify-items-center text-center items-center p-3">
            <BsFillTagsFill className="text-white" />
            <a href="" className="pl-3">
              Transactions
            </a>
          </div>
          <div className="flex justify-items-center text-center items-center p-3">
            <AiOutlineSchedule className="text-white" />
            <a href="" className="pl-3 ">
              Schedules
            </a>
          </div>
          <div className="flex justify-items-center text-center items-center p-3">
            <BiUserCircle />
            <a href="" className="pl-3">
              Users
            </a>
          </div>
          <div className="flex justify-items-center text-center items-center p-3">
            <AiOutlineSetting />
            <a href="" className="pl-3">
              Settings
            </a>
          </div>
        </div>
        <div>
          <div className="links">
            <a href="" className="font-light">
              Help
            </a>
          </div>
          <div className="links">
            <a href="" className="font-light">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
