"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

//
import {
  FaHeart,
  FaRegHeart,
  FaCartPlus,
  FaShoppingCart,
} from "react-icons/fa";

//
import FormattedPrice from "@/lib/FormattedPrice";
import { addToCart, addToFavorite, deleteFavorite } from "@/store/nextSlice";
import { Button } from "../ui/button";

//
import { ProductProps, StateProps } from "../../../type";

interface Props {
  productData: ProductProps[];
}
const Products = ({ productData }: Props) => {
  const dispatch = useDispatch();
  const { productData: productCard, favoriteData } = useSelector(
    (state: StateProps) => state.next
  );
  return (
    <div className="w-full  px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:max-w-full mx-auto">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => {
          const isProductCard = productCard.find(
            (item: ProductProps) => item._id == _id
          )
            ? true
            : false;
          const isFavorite = favoriteData.find(
            (item: ProductProps) => item._id == _id
          )
            ? true
            : false;

          return (
            <div
              key={_id}
              className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
            >
              <div className="w-full h-[260px] relative">
                {/* In this section, by clicking on the picture, the data will be sent to the page /product/${_id} (SingleProduct) through query. */}
                <Link
                  href={{
                    pathname: `/product/${_id}`,
                    query: {
                      _id: _id,
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      title: title,
                    },
                  }}
                >
                  <Image
                    className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                    width={300}
                    height={300}
                    src={image}
                    alt="productImage"
                  />
                </Link>
                <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                  {/* In this section, by clicking on the shopping cart icon, the data is saved in redux and added to the shopping cart in real time. */}
                  <span
                    onClick={() =>
                      dispatch(
                        addToCart({
                          _id: _id,
                          brand: brand,
                          category: category,
                          description: description,
                          image: image,
                          isNew: isNew,
                          oldPrice: oldPrice,
                          price: price,
                          title: title,
                          quantity: 1,
                        })
                      )
                    }
                    className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                  >
                    {isProductCard ? <FaShoppingCart /> : <FaCartPlus />}
                    {isProductCard && (
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-[0.15rem] dark:border-gray-900">
                        {
                          productCard.find(
                            (item: ProductProps) => item._id == _id
                          ).quantity
                        }
                      </div>
                    )}
                  </span>
                  {/* In this section, by clicking on the favorites icon, the data will be saved in redux and will be added to the favorites in real time and deleted by clicking again. */}
                  <span
                    onClick={() =>
                      dispatch(
                        isFavorite
                          ? deleteFavorite(_id)
                          : addToFavorite({
                              _id: _id,
                              brand: brand,
                              category: category,
                              description: description,
                              image: image,
                              isNew: isNew,
                              oldPrice: oldPrice,
                              price: price,
                              title: title,
                              quantity: 1,
                            })
                      )
                    }
                    className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                  >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                  </span>
                </div>
                {isNew && (
                  <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                    !save <FormattedPrice amount={oldPrice - price} />
                  </p>
                )}
              </div>
              <hr />
              <div className="px-4 py-3 flex flex-col gap-1">
                <p className="text-xs text-gray-500 tracking-wide">
                  {category}
                </p>
                <p className="text-base font-medium">{title}</p>
                <p className="flex items-center gap-2">
                  <span className="text-sm line-through">
                    <FormattedPrice amount={oldPrice} />
                  </span>
                  <span className="text-amazon_blue font-semibold">
                    <FormattedPrice amount={price} />
                  </span>
                </p>
                <p className="text-xs text-gray-600 text-justify">
                  {description.substring(0, 120)}
                </p>
                <Button
                  disabled={isProductCard}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: _id,
                        brand: brand,
                        category: category,
                        description: description,
                        image: image,
                        isNew: isNew,
                        oldPrice: oldPrice,
                        price: price,
                        title: title,
                        quantity: 1,
                      })
                    )
                  }
                  className=" mt-2 "
                >
                  {isProductCard ? "Added" : "add to cart"}
                </Button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Products;
