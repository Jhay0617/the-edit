import { Mail, MapPin, Phone, Trash2, Edit3, UserCheck } from "lucide-react";
import {
  UserGrid,
  UserCard,
  UserAvatar,
  Badge,
  PageTitle,
} from "../ui/UserManagementStyles";

import { useDeleteUser, useGetUsersData } from "../hooks/useUsersData";
import { toast } from "sonner";

import Modal from "../ui/Modal";
import { PrimaryButton } from "../ui/InventoryStyles";
import EditUserForm from "../features/EditUserForm";
import { useState } from "react";

function UserManagement() {
  const [editingUser, setEditingUser] = useState(null);
  const { data: users, isLoading, error } = useGetUsersData();
  const { mutate: deleteUser, isPending } = useDeleteUser();

  if (isLoading) return <p style={{ padding: "40px" }}>Syncing User Data...</p>;
  if (error) return <p style={{ padding: "40px" }}>Error: {error.message}</p>;

  const handleDelete = (id, name) => {
    toast(`Delete ${name}?`, {
      description: "This action cannot be undone.",
      duration: Infinity,
      action: {
        label: "Delete",

        onClick: () => {
          toast.success(`${name} has been deleted.`);
          deleteUser(id);
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => {
          toast.info("Delete action cancelled. Nothing was changed.");
        },
      },
    });
  };

  return (
    <section>
      <PageTitle>User Management ({users?.length})</PageTitle>

      <UserGrid>
        {users?.map((user) => (
          <UserCard key={user.id}>
            {/* Top Section: Status & Avatar */}
            <Badge>
              <UserCheck size={10} /> Active Member
            </Badge>
            <UserAvatar src={user.avatar} alt={user.fullName} />

            {/* Middle Section: Identity */}
            <h3 style={{ fontSize: "18px", fontWeight: "700" }}>
              {user.fullName}
            </h3>
            <p style={{ fontSize: "13px", opacity: 0.5, marginBottom: "20px" }}>
              @{user.username}
            </p>

            {/* Bottom Section: Contact Details */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12px",
                  opacity: 0.8,
                }}
              >
                <Mail size={14} /> {user.email}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12px",
                  opacity: 0.8,
                }}
              >
                <MapPin size={14} /> {user.city}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12px",
                  opacity: 0.8,
                }}
              >
                <Phone size={14} /> {user.phone}
              </div>
            </div>

            {/* Action Footer */}
            <div
              style={{
                marginTop: "auto",
                paddingTop: "24px",
                width: "100%",
                display: "flex",
                gap: "12px",
              }}
            >
              <PrimaryButton
                style={{ flex: 1 }}
                onClick={() => setEditingUser(user)}
              >
                <Edit3 size={14} /> Edit
              </PrimaryButton>
              <PrimaryButton
                $delete
                style={{ flex: 1 }}
                disabled={isPending}
                onClick={() => handleDelete(user.id, user.fullName)}
              >
                <Trash2 size={14} /> {isPending ? "..." : "Delete"}
              </PrimaryButton>
            </div>
          </UserCard>
        ))}
      </UserGrid>
      {editingUser && (
        <Modal onClose={() => setEditingUser(null)}>
          <EditUserForm
            user={editingUser}
            onClose={() => setEditingUser(null)}
          />
        </Modal>
      )}
    </section>
  );
}

export default UserManagement;
