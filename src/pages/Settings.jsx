import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../store/adminSlice";
import { toast } from "sonner";
import {
  ContactLink,
  SectionHeader,
  SettingsContainer,
  SettingsSection,
} from "../ui/SettingsStyles";
import { Form, FormGroup } from "../ui/Form";
import { PrimaryButton } from "../ui/InventoryStyles";
import ThemeSwitch from "../ui/ThemeSwitch";

function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.admin.storeSettings);

  const { register, handleSubmit } = useForm({
    defaultValues: settings,
  });

  const onSubmit = (data) => {
    dispatch(updateSettings(data));
    toast.success("Settings updated successfully");
  };

  return (
    <SettingsContainer>
      <header>
        <h2 style={{ fontSize: "28px", fontWeight: 800 }}>Settings</h2>
      </header>

      {/* 1. General Store Info */}
      <SettingsSection>
        <SectionHeader>
          <h3>Store Identity</h3>
          <p>
            This information will be visible across the dashboard and sidebar.
          </p>
        </SectionHeader>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <label>Store Name</label>
            <input {...register("storeName")} />
          </FormGroup>
          <FormGroup>
            <label>Support Email</label>
            <input {...register("storeEmail")} />
          </FormGroup>
          <PrimaryButton type="submit" style={{ marginTop: "10px" }}>
            Save Store Info
          </PrimaryButton>
        </Form>
      </SettingsSection>

      {/* 2. Appearance Section */}
      <SettingsSection>
        <SectionHeader>
          <h3>Appearance</h3>
          <p>Customize how the dashboard looks for your session.</p>
        </SectionHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Interface Theme</span>
          <ThemeSwitch />
        </div>
      </SettingsSection>

      {/* 3. System Info (Read Only) */}
      <SettingsSection>
        <SectionHeader>
          <h3>System Information</h3>
          <p>Current build and developer details.</p>
        </SectionHeader>
        <div
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ opacity: 0.6 }}>Version</span>
            <strong>1.0.0-stable</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ opacity: 0.6 }}>Developer</span>
            <strong>Jay Mora</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ opacity: 0.6 }}>Contact Me</span>
            <ContactLink href="mailto:jhay17mora@gmail.com">
              jhay17mora@gmail.com
            </ContactLink>
          </div>
        </div>
      </SettingsSection>
    </SettingsContainer>
  );
}

export default Settings;
