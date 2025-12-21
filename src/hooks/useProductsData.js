import { useQuery } from "@tanstack/react-query";
const API_URL = "https://fakestoreapi.com";
export const useProductsData = () => {
  async function fetchData() {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();

    return data;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 1,
  });

  return { data, isLoading, error };
};

export const useUpdateProduct = () => {
  async function updateProduct(id, updateObj) {
    try {
      const res = await fetch(`${API_URL}/products/${id}`, {
        method: "PATCH",
        body: JSON.stringify(updateObj),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Server responded with an error");

      const data = await res.json();

      return data;
    } catch (err) {
      throw new Error(err.message || "Failed updating your product");
    }
  }
  return updateProduct;
};

export const useGetProduct = () => {
  async function getProductById(id) {
    if (!id) return null;

    try {
      const res = await fetch(`${API_URL}/products/${id}`);

      if (!res.ok) throw new Error("Product not found");

      const data = await res.json();

      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  return getProductById;
};

export const useCreateProduct = () => {
  async function createNewItem(newProduct) {
    try {
      const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Server failed to create a product");

      const data = await res.json();

      return data;
    } catch (err) {
      throw new Error(err.message || "Failed to create new product");
    }
  }

  return createNewItem;
};

export const useDeleteProduct = () => {
  async function removeProduct(id) {
    try {
      const res = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Server failed to delete the product");
      const text = await res.text();
      const data = text ? JSON.parse(text) : { id, deleted: true };

      return data;
    } catch (err) {
      throw new Error(err.message || "Failed to delete product");
    }
  }
  return removeProduct;
};
