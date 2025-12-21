import { useForm } from "react-hook-form";
import { useCreateProduct, useUpdateProduct } from "./useProductsData";
import { useDispatch } from "react-redux";
import { createProduct, editProduct } from "../store/adminSlice";
import { toast } from "sonner";
import { useEffect } from "react";

export const useFormActions = (toEdit, onClose) => {
  const createNewItem = useCreateProduct();
  const updateProduct = useUpdateProduct();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: toEdit || {},
  });
  useEffect(() => {
    reset(toEdit || {});
  }, [toEdit, reset]);
  const onSubmit = async (data) => {
    try {
      const payload = { ...data, price: Number(data.price) };
      if (toEdit) {
        const updated = await updateProduct(toEdit.id, payload);
        dispatch(editProduct(updated));
        toast.success("Product updated successfully");
      } else {
        const created = await createNewItem(payload);
        const uniqueItem = { ...created, id: Date.now() };
        dispatch(createProduct(uniqueItem));
        toast.success("Product created successfully");
      }
      onClose?.();
      reset();
    } catch (err) {
      toast.error(err.message || "An error occurred");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};
