import { toast } from "sonner";
import { useUpdateUserInfo } from "../hooks/useUsersData";
import { useForm } from "react-hook-form";
import { Form, FormGroup, FormHeader } from "../ui/Form";
import { PrimaryButton } from "../ui/InventoryStyles";
import { ButtonGroup, SecondaryButton } from "../ui/ButtonStyles";

function EditUserForm({ user, onClose }) {
  const { mutate: update, isPending } = useUpdateUserInfo();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      city: user.city,
    },
  });

  const onSubmit = (data) => {
    update(
      { id: user.id, updateInfo: data },
      {
        onSuccess: () => {
          toast.success("User updated (Simulated)");
          onClose();
        },
      }
    );
  };

  return (
    // ✅ Use the same Styled Components as your Product Form
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>Edit User Account</FormHeader>

      <FormGroup>
        <label>Full Name</label>
        <input {...register("fullName")} />
      </FormGroup>

      <FormGroup>
        <label>Email Address</label>
        <input {...register("email")} />
      </FormGroup>

      <FormGroup>
        <label>City</label>
        <input {...register("city")} />
      </FormGroup>

      <ButtonGroup>
        <SecondaryButton type="button" onClick={onClose}>
          Cancel
        </SecondaryButton>
        <PrimaryButton type="submit" disabled={isPending}>
          {isPending ? "Updating..." : "Save Changes"}
        </PrimaryButton>
      </ButtonGroup>
    </Form>
  );
}

export default EditUserForm;
