import React from "react";
import date from "date-and-time";
import { BiTimeFive } from "react-icons/bi";
import {MdFacebook} from "react-icons/md"
import {FaTwitter} from "react-icons/fa"
const TopNav = () => {
  return (
    <div className="flex justify-around bg-gray-700 text-white p-2">
      <div className="flex items-center gap-2">
        <div>
          <BiTimeFive />
        </div>
        <div>Today | {date.format(new Date(), "ddd, DD MMM YYYY")}</div>
      </div>
      <div className="flex items-center gap-2">
        <MdFacebook className="text-blue-500 cursor-pointer text-lg" />
        <FaTwitter className="text-blue-500 cursor-pointer text-lg"/>
      </div>
    </div>
  );
};

export default TopNav;
