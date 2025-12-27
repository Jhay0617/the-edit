import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";
import {
  LoginCard,
  LoginLogo,
  LoginSubtitle,
  LoginWrapper,
} from "../ui/LoginStyles";
import { FormGroup } from "../ui/Form";
import { PrimaryButton } from "../ui/InventoryStyles";

function Login() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);
  const { handleLogin, isPending } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.email || !data.password) return;

    const result = await handleLogin(data.email, data.password);

    if (result.success) {
      toast.success("Welcome back, Administrator");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <LoginLogo>THE EDIT</LoginLogo>
        <LoginSubtitle>Admin Access Terminal</LoginSubtitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <label>Work Email</label>
            <input
              type="email"
              placeholder="admin@theedit.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "11px" }}>
                {errors.email.message}
              </span>
            )}
          </FormGroup>

          <FormGroup style={{ marginTop: "20px" }}>
            <label>Security Password</label>
            <input
              type="password"
              placeholder="admin123"
              {...register("password", { required: "Password is required" })}
            />
          </FormGroup>

          <PrimaryButton
            type="submit"
            style={{ width: "100%", marginTop: "32px" }}
            disabled={isPending}
          >
            {isPending ? "Verifying Credentials..." : "Authenticate"}
          </PrimaryButton>
        </form>
      </LoginCard>
    </LoginWrapper>
  );
}

export default Login;
