import Image from "next/image";
import React from "react";
import FormattedPrice from "@/lib/FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, deleteFavorite } from "@/store/nextSlice";
import { Button } from "../ui/button";
import { IoMdClose } from "react-icons/io";
interface Item {
  _id: number;
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  quantity: number;
}
interface cartProductProps {
  item: Item;
}

const FavoriteProduct = ({ item }: cartProductProps) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2">
      <Image src={item.image} alt="Product image" width={150} height={150} />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-500">{item.description}</p>
          <div className="flex items-center gap-6">
            <p className="text-sm text-gray-600">
              Unit price:{" "}
              <span className="font-semibold text-amazon_blue">
                <FormattedPrice amount={item.price} />
              </span>
            </p>
            {/* In this section, you can remove the product from the list of favorites */}
            <div
              onClick={() => dispatch(deleteFavorite(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" /> <p>remove</p>
            </div>
          </div>
          {/* In this section, you can add the product to the shopping cart */}
          <Button
            onClick={() => {
              dispatch(
                addToCart({
                  ...item,
                  quantity: 1,
                })
              ) && dispatch(deleteFavorite(item._id));
            }}
            className="w-44 h-10 font-medium  text-white rounded-md hover:bg-amazon_yellow duration-300 hover:text-black mt-2"
          >
            add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
