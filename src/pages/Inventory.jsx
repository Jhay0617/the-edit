import {
  InventoryHeader,
  InventoryWrapper,
  PrimaryButton,
} from "../ui/InventoryStyles";
import Modal from "../ui/Modal";
import InventoryTable from "../features/InventoryTable";
import CreateProductForm from "../features/CreateProductForm";

import { useInventory } from "../hooks/useInventory";
import { useState } from "react";

function Inventory() {
  const { displayProducts, isLoading } = useInventory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };
  console.log(displayProducts);
  const handleAddNew = () => {
    setEditingProduct(null); // Clear for new product
    setIsModalOpen(true);
  };
  if (isLoading) return <p>Loading Inventory Data.....</p>;
  return (
    <InventoryWrapper>
      <InventoryHeader>
        <h2>Inventory ({displayProducts.length})</h2>
        <PrimaryButton onClick={handleAddNew}>+ Add Product</PrimaryButton>
      </InventoryHeader>
      <InventoryTable toEdit={handleEdit} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateProductForm
            key={editingProduct?.id || "new"}
            toEdit={editingProduct}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </InventoryWrapper>
  );
}

export default Inventory;
