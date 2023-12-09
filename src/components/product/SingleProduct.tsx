"use client";
import Image from "next/image";

//
import { Button } from "@/components/ui/button";
import FormattedPrice from "@/lib/FormattedPrice";

//
import { Star, Truck } from "lucide-react";

//
import { addToCart } from "@/store/nextSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductProps, StateProps } from "../../../type";

interface Props {
  data: ProductProps;
}

export default function SingleProduct({ data }: Props) {
  const { productData: productCard } = useSelector(
    (state: StateProps) => state.next
  );
  const isProductCard = productCard.find(
    (item: ProductProps) => item._id == data._id
  )
    ? true
    : false;
  const dispatch = useDispatch();
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 ">
      <div className="grid gap-8 md:grid-cols-2 h-[500px] ">
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={data.image}
            alt="Photo"
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
              {data.category}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              {data.brand}
            </h2>
          </div>
          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="rounded-full gap-x-2">
              <span className="text-sm">4.2</span>
              <Star className="h-5 w-5" />
            </Button>

            <span className="text-sm text-gray-500 transition duration-100">
              56 Ratings
            </span>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl  line-through">
                <FormattedPrice amount={data.oldPrice} />
              </span>
              <span className="mb-0.5 text-red-500 ">
                <FormattedPrice amount={data.price} />
              </span>
            </div>

            <span className="text-sm text-gray-500">
              Incl. Vat plus shipping
            </span>
          </div>
          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <Truck className="w-6 h-6" />
            <span className="text-sm">2-4 Day Shipping</span>
          </div>
          <div className="flex gap-2.5">
            <Button
              disabled={isProductCard}
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: data._id,
                    brand: data.brand,
                    category: data.category,
                    description: data.description,
                    image: data.image,
                    isNew: data.isNew,
                    oldPrice: data.oldPrice,
                    price: data.price,
                    title: data.title,
                    quantity: 1,
                  })
                )
              }
              className=" mt-2 "
            >
              {isProductCard ? "Added" : "add to cart"}
            </Button>
            {/* <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              /> */}
          </div>
          <p className="mt-12 text-base text-gray-500 tracking-wide">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
