"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

//
import { Button } from "@/components/ui/button";
import { StateProps } from "../../type";

//
import { FileHeart, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next
  );

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-full">
        <Link href="/">
          <h1 className="text-xl md:text-4xl font-bold">
            Sugimotovisa<span className="text-primary">Test</span>
          </h1>
        </Link>

        <div className="flex items-center gap-2">
          {/* favorit */}
          <div className="flex  border-r sm:border-l">
            <Link
              href="/favorite"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
            >
              <Button
                variant={"outline"}
                className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
              >
                <div className="relative flex flex-col items-center">
                  <FileHeart />
                  {favoriteData.length > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-[0.15rem] dark:border-gray-900">
                      {favoriteData.length}
                    </div>
                  )}

                  <span className="hidden text-xs mt-1 font-semibold text-gray-500 sm:block">
                    Favorit
                  </span>
                </div>
              </Button>
            </Link>
          </div>

          {/* cart */}
          <div className="flex  border-r sm:border-l">
            <Link href={"/cart"}>
              <Button
                variant={"outline"}
                className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
              >
                <div className="relative flex flex-col items-center">
                  <ShoppingBag />
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-[0.45rem] dark:border-gray-900">
                    {productData ? productData.length : 0}
                  </div>
                  <span className="hidden text-xs mt-1 font-semibold text-gray-500 sm:block">
                    Cart
                  </span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
