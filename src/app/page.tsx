import Banner from "@/components/baner";
import Products from "@/components/product/Products";

const getData = async () => {
  const data = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  return data.json();
};

export default async function Home() {
  const productData = await getData();
  return (
    <main>
      <div className="">
        {/* In the banner section, photos are received statically from the assets folder */}
        <Banner />
        <div className="relative md:-mt-20 lg:-mt-32 xl:-mt-60 z-20 mb-10">
          {/* The data of the Products component is received from a fake api */}
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}
