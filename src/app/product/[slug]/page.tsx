import SingleProduct from "@/components/product/SingleProduct";
import { ProductProps } from "../../../../type";

interface Props {
  searchParams: ProductProps;
}
type DataType = ProductProps;
export default function ProductPge({ searchParams }: Props) {
  return <SingleProduct data={searchParams as DataType} />;
}
