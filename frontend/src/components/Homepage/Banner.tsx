import React, { useEffect,useState } from "react";
import { getData } from "../../utills/api";
import { bannerType } from "../../utills/customType";
import BannerChild from "./BannerChild";
import ImageTextFlex from "../skeleton/ImageTextFlex";
const Banner = () => {
    const [data,setData]= useState<bannerType>([]);
    const [load,setLoad]= useState(false);
    const [color,setColor]= useState(["bg-y-700","bg-b-700","bg-g-700","bg-ge-700"])
    useEffect(()=>{
      setLoad(true);
       getData('/blogs?type=view&limit=4')
       .then((res:any)=>{
        console.log(res.data.data);
          setData(res.data.data)
          setLoad(false);
       }).catch((err:any)=>{
          console.log(err);
       })
    },[]) 
  return (
    <div className="dark:bg-g-900 bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijcjiO3r2NY7cOp_Ctd-HVTkhAvhQCFe9sapMhy3HGtbQCVGAfub5On1UWN0x09UG4p9T8erc-gMcb5pE1potJuzVQHKPoUYafU1s7UgCCj2CiERObaUF1Orpglm4sBzZ-pLz-aD76eRUDbY7urrBpprtFkhIVriUZSn-rSCyDsSl754vk-Os55hyF/s16000/ico%20s-min.png')]  bg-cover">
      <div className="w-4/5 m-auto py-8">
        <div className="grid grid-cols-4 gap-5">
         {
          !load&&data&&data.length>0&&data.map((el,i)=>{
            return <BannerChild key={i} {...el} num={i+1} color={color[i]}  />
         })
        }
        {
          load&&data&&<><ImageTextFlex/> <ImageTextFlex/> <ImageTextFlex/> <ImageTextFlex/></>
        }
        </div>
      </div>
    </div>
  );
};

export default Banner;
