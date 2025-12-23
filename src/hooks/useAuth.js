import { useDispatch } from "react-redux";
import { login, setError } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (email, password) => {
    try {
      if (!email) {
        dispatch(setError("Email is required"));
        return { success: false };
      }
      const cleanEmail = email.toLowerCase().trim();

      if (!cleanEmail.endsWith("@theedit.com")) {
        throw new Error(
          "Access Denied: Only @theedit.com emails are authorized."
        );
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "admin@theedit.com" && password === "admin123") {
        const mockUser = { email, role: "admin", name: "Jhay Mora" };
        dispatch(login(mockUser));
        navigate("/admin/dashboard");
        return { success: true };
      } else {
        throw new Error("Invalid password for this admin account.");
      }
    } catch (err) {
      dispatch(setError(err.message));
      return { success: false, message: err.message };
    }
  };

  return { handleLogin };
};
