"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

//
import CartProduct from "@/components/product/CartProduct";
import ResetCart from "@/components/product/ResetCart";

//
import { StateProps, StoreProduct } from "../../../type";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <div className="max-w-screen-2xl mx-auto  py-4">
      {productData.length > 0 ? (
        <>
          <div className="bg-white  py-5 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
              <Link
                href={"/"}
                className="text-lg font-semibold text-amazon_blue"
              >
                Back
              </Link>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              {productData.map((item: StoreProduct) => (
                <div key={item._id}>
                  <CartProduct item={item} />
                </div>
              ))}
              <ResetCart />
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white h-64  flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Your cart is empty!</h1>
          <Link href={"/"}>
            <Button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black">
              go to shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
