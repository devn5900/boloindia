import React, { useEffect, useState } from "react";
import Showmore from "./Showmore";
import { BsCalendarRange } from "react-icons/bs";
import { Link } from "react-router-dom";
import date from "date-and-time";
import BigBLeftChild from "./BigBLeftChild";
import { getData } from "../../utills/api";
import { bannerType } from "../../utills/customType";
import BigBRightChild from "./BigBRightChild";
const BigBLeft = () => {
  const [data, setData] = useState<bannerType>([]);
  const [color,setColor]= useState(["bg-y-700","bg-b-700","bg-g-700","bg-ge-700"])

  useEffect(() => {
    getData("/blogs?type=view&limit=5")
      .then((res: any) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("d", data);
  return (
    <div className=" col-span-2 w-full ">
      <Showmore title={"Popular"} path={"/"} />
      <div className="flex gap-8">
        {data && data.length > 0 && <BigBLeftChild {...data[0]} />}
        <div className="flex flex-col gap-4 w-1/2 overflow-hidden">
          {data &&
            data.length > 0 &&
            data.map((el, i) => {
              if (i !== 0) {
                return <BigBRightChild key={i} {...el} color={color[i]} num={i} />;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default BigBLeft;
