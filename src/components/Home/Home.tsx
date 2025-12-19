import { useState } from "react";
import { Menu } from "./menu/Menu";

export function Home() {
  const tik = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );

  const [totalprice, setTotalprice] = useState(0);
  return (
    <div className="h-screen w-full flex  bg-[#00688f]">
      <div className=" flex flex-col bg-[#01c9c5] p-5 w-75 gap-4 h-fit rounded-md m-5 ">
        <div className="flex justify-between flex-row-reverse">
          <div>جمع کلسفارشات:</div>
          <div> {totalprice} تومان</div>
        </div>
        <div className="flex justify-between flex-row-reverse">
          <div> حق سرویس و کارمزد:</div>
          <div> 1200 تومان</div>
        </div>
        <div className="flex justify-between flex-row-reverse">
          <div>تخفیف :</div>
          <div>6000 تومان</div>
        </div>
        <div className="flex flex-row-reverse items-center mb-15 overflow-hidden">
          <input
            type="text"
            placeholder="gold"
            className="bg-white outline-none p-1.5 rounded-r-md w-full"
          />
          <button className="bg-[#018093] h-full w-11 rounded-l-md  ">
            {tik}
          </button>
        </div>
        <div className="flex flex-row-reverse justify-between bg-[#feda01] p-1.5 rounded-md">
          <div>مبلغ قابل پرداخت</div>
          <div>35200 تومان</div>
        </div>
        <div className="grid place-items-center bg-[#018093] p-1.5 rounded-md font-semibold cursor-pointer">
          <button className="text-white text-xl ">ثبت سفارش</button>
        </div>
      </div>
      <Menu setTotalprice={setTotalprice} />
    </div>
  );
}
