"use client";
import { useSelector } from "react-redux";
import Link from "next/link";

//
import { StateProps, StoreProduct } from "../../../type";

//
import FavoriteProduct from "@/components/product/FavoriteProduct";
import ResetFavoriteItems from "@/components/product/ResetFavoriteItems";
import { Button } from "@/components/ui/button";

const FavoritePage = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.next);

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-full  py-4">
      {favoriteData.length > 0 ? (
        // This section is for checking the presence or absence of data in the favorites section
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
            <p className="text-2xl font-semibold text-amazon_blue">
              Favorte Items
            </p>
            <Link href={"/"} className="text-lg font-semibold text-amazon_blue">
              Back
            </Link>
          </div>
          <div>
            {favoriteData.map((item: StoreProduct) => (
              <div key={item._id} className="mt-2">
                <FavoriteProduct item={item} />
              </div>
            ))}
            {/* Using this component, you can completely delete favorites */}
            <ResetFavoriteItems />
          </div>
        </div>
      ) : (
        // This section is for the lack of data in the favorites section
        <div className="bg-white h-96  flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1>Nothing is available in the Favorite list</h1>
          <Link href="/">
            <Button variant={"card"} className="w-52 h-10">
              go to shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
