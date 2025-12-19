import type { Dispatch, SetStateAction } from "react";
import { products } from "../../../backend/foods";
import { Cart } from "./Cart/Cart";

interface MenuProps {
  setTotalprice: Dispatch<SetStateAction<number>>;
  totalprice: number;
}
export function Menu({ setTotalprice, totalprice }: MenuProps) {
  return (
    <div className="flex flex-col justify-center items-center flex-1 m-5 bg-[#00c8c4] rounded-md p-5 ">
      <div className="text-white text-2xl text-center font-semibold p-5">
        رستوران مک دونالد شعبه بوشهر
      </div>
      <div className="flex-1  pt-20 relative gap-5  overflow-hidden overflow-y-auto rounded-2xl grid grid-cols-[repeat(auto-fit,minmax(285px,1fr))] lg:grid-cols-2 h-auto">
        {products.map((item) => (
          <Cart
            img={item.img}
            price={item.price}
            title={item.title}
            key={item.id}
            setTotalprice={setTotalprice}
            totalprice={totalprice}
          />
        ))}
      </div>
      <div className="h-2"></div>
    </div>
  );
}
