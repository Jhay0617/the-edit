import { useDispatch } from "react-redux";
import { useDeleteProduct } from "./useProductsData";
import { toast } from "sonner";
import { useInventory } from "./useInventory";
import { useState } from "react";
import { deleteProduct } from "../store/adminSlice";

function useAdminAction() {
  const removeProduct = useDeleteProduct();
  const dispatch = useDispatch();
  const { displayProducts, isLoading } = useInventory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(null);

  const handleEdit = (product) => {
    setIsEditing(product);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setIsEditing(null);
    setIsModalOpen(true);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await removeProduct(id);
        dispatch(deleteProduct(id));

        toast.success("Product deleted successfully");
      } catch (err) {
        toast.error(err.message || "Failed to delete product");
      }
    }
  };

  return {
    handleDelete,
    handleEdit,
    handleAddNew,
    isModalOpen,
    setIsModalOpen,
    isEditing,
    displayProducts,
    isLoading,
  };
}
export default useAdminAction;
