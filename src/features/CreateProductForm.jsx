import { useFormActions } from "../hooks/useFormActions";
import { Form, FormGroup, SubmitButton } from "../ui/Form";

function CreateProductForm({ toEdit, onClose }) {
  const isEditing = Boolean(toEdit);
  const { register, handleSubmit, onSubmit } = useFormActions(toEdit, onClose);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>{isEditing ? "Edit Product" : "Add New Product"}</h3>

      <FormGroup>
        <label>Title</label>
        <input {...register("title", { required: true })} />
      </FormGroup>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}
      >
        <FormGroup>
          <label>Price</label>
          <input type="number" {...register("price", { required: true })} />
        </FormGroup>
        <FormGroup>
          <label>Category</label>
          <select {...register("category")}>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </FormGroup>
      </div>

      <FormGroup>
        <label>Description</label>
        <textarea rows="3" {...register("description")} />
      </FormGroup>

      <SubmitButton type="submit">
        {isEditing ? "Save Changes" : "Create Product"}
      </SubmitButton>
    </Form>
  );
}

export default CreateProductForm;
