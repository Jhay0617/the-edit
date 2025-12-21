import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL = "https://fakestoreapi.com";

export const useGetUsersData = () => {
  async function fetchUsersData() {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) throw new Error("Failed to fetch users data");
    const data = await res.json();

    return data;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsersData,
    staleTime: 1000 * 60 * 1,

    select: (users) =>
      users.map((user) => ({
        id: user.id,
        email: user.email,
        username: user.username,

        fullName: `${user.name.firstname} ${user.name.lastname}`,
        city: user.address.city,
        phone: user.phone,

        avatar: `https://ui-avatars.com/api/?name=${user.name.firstname}+${user.name.lastname}&background=242424&color=f2f2f2`,
      })),
  });

  return { data, isLoading, error };
};

export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, updateInfo }) => {
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateInfo),
      });

      if (!res.ok) throw new Error("Failed to update user on the server");

      return await res.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete user from server");
      const text = await res.text();
      return text ? JSON.parse(text) : { id, deleted: true };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
