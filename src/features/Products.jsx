import { useProductsData } from "../hooks/useProductsData";

function Products() {
  const { data } = useProductsData();
  console.log(data);
  return <div></div>;
}

export default Products;
