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
        <Banner />
        <div className="relative md:-mt-20 lg:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}
