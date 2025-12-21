import { useSelector } from "react-redux";
import { useProductsData } from "./useProductsData";
import { useMemo } from "react";

export const useInventory = () => {
  const { data: apiProducts, isLoading, error } = useProductsData();

  const { modifiedProducts, deletedProducts, addedProducts } = useSelector(
    (state) => state.admin
  );

  const displayProducts = useMemo(() => {
    const sourceProducts = apiProducts || [];

    let productList = [...addedProducts, ...sourceProducts];
    productList = productList.filter(
      (item) => !deletedProducts.includes(Number(item.id))
    );

    return productList.map((item) => {
      const modified = modifiedProducts.find(
        (product) => Number(product.id) === Number(item.id)
      );

      return modified ? modified : item;
    });
  }, [apiProducts, addedProducts, deletedProducts, modifiedProducts]);

  return {
    displayProducts,
    isLoading,
    error,
    totalCount: displayProducts.length,
    addedCount: addedProducts.length,
  };
};
