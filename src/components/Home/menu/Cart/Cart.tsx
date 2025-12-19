import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type CartProps = {
  title: string;
  price: number;
  img: string;
  setTotalprice: Dispatch<SetStateAction<number>>;
  totalprice: number;
};

export function Cart({
  title,
  price,
  img,
  setTotalprice,
  totalprice,
}: CartProps) {
  const [count, setCount] = useState(0);
  // const finalPrice = totalprice + (count * price);
  return (
    <div className="grid grid-cols-4 grid-rows-3 bg-white m-auto my-2 w-[95%] h-37.5 gap-x-2.5 overflow-hidden rounded-2xl">
      <div className="col-start-1 col-end-3 row-start-1 row-end-4 relative">
        <img className="object-cover w-full h-full" src={img} alt={title} />
      </div>

      <h3 className="col-start-3 col-end-5 row-start-1">{title}</h3>

      <p className="col-start-3 col-end-5 row-start-2 row-end-3">
        {price} <span>تومان</span>
      </p>

      <div className="border-2 rounded-[9px] h-6 bg-white flex items-center col-start-3 col-end-4 row-start-3">
        <button
          onClick={() => {
            {
              setCount((c) => c + 1);
              setTotalprice(totalprice + count * price);
            }
          }}
          className="w-full"
        >
          +
        </button>
        <p className="px-3">{count}</p>
        <button
          onClick={() => setCount((c) => Math.max(c - 1, 0))}
          className="w-full"
        >
          -
        </button>
      </div>

      <div className="col-start-4 row-start-3 ml-5 mr-auto">
        {price * count} <span>تومان</span>
      </div>
    </div>
  );
}
