import { Edit2, Trash2 } from "lucide-react";
import { ActionButton, StyledTable, TableContainer } from "../ui/Tables";
import useAdminAction from "../hooks/useAdminAction";
import { useSelector } from "react-redux";
import { getAddedProducts } from "../store/adminSlice";

function InventoryTable({ toEdit }) {
  const { handleDelete, displayProducts: products } = useAdminAction();
  const test = useSelector(getAddedProducts);
  console.log(test);
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => (
            <tr key={`${products.id}-${products.title}`}>
              <td style={{ fontWeight: 600 }}>{products.title}</td>
              <td style={{ textTransform: "capitalize" }}>
                {products.category}
              </td>
              <td>${products.price}</td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <ActionButton onClick={() => toEdit(products)}>
                    <Edit2 size={16} />
                  </ActionButton>
                  <ActionButton
                    $delete
                    onClick={() => handleDelete(products.id)}
                  >
                    <Trash2 size={16} />
                  </ActionButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default InventoryTable;
