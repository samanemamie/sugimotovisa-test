import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  colorProduct,
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";

//
import FormattedPrice from "@/lib/FormattedPrice";

//
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useColorClasses } from "@/lib/hooks/useColorClasses";

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
  color: string;
}
interface cartProductsProps {
  item: Item;
}

const CartProduct = ({ item }: cartProductsProps) => {
  const colorOptions = [
    { color: "red", label: "red" },
    { color: "green", label: "green" },
    { color: "pink", label: "pink" },
  ];

  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row items-center gap-4 py-3 ">
      <Image
        className="object-cover"
        width={150}
        height={150}
        src={item.image}
        alt="productImage"
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-600">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className="flex items-center gap-6">
            {/* In this section, the number of products is added or reduced */}
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      ...item,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      ...item,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuMinus />
              </span>
            </div>
            {/* In this section, you can remove the product from the shopping cart */}
            <div
              onClick={() => dispatch(deleteProduct(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" /> <p>remove</p>
            </div>
          </div>
          {/* In this section, you can choose the color of the product */}
          <div className="flex flex-col md:flex-row items-start gap-3 mt-2">
            {colorOptions.map((option, index) => {
              const { bgClass, borderClass } = useColorClasses(
                option.color,
                item.color
              );
              return (
                <div
                  key={index}
                  className={`border text-center cursor-pointer ${bgClass} ${borderClass} px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300`}
                  onClick={() =>
                    dispatch(
                      colorProduct({
                        ...item,
                        quantity: 1,
                        color: option.color,
                      })
                    )
                  }
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
