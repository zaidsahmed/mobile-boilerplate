import { useApi } from "@/hooks/useApi";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useToast } from "@/providers/ToastProvider";
import { matchPasswords, validateEmailAddress } from "@/utils/generalUtils";
import { useNavigationUtils } from "@/utils/navigationUtils";
import { useState } from "react";

export const useRegisterViewModel = () => {
  const theme = useColorScheme() ?? "light";
  const { showSuccessToast, showErrorToast } = useToast();
  const { navigateTo } = useNavigationUtils();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Setup the API hook for Register
  const {
    data: registerData,
    error: registerError,
    loading: registerLoading,
    callApi: callRegisterApi,
  } = useApi(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    let resp = {
      body: "Registration successful",
      status: 200,
      statusText: "OK",
    };
    return resp;
    // const response = await api.post("/register", { name, email, password });
    // return response.data
  });

  const handleSubmit = async () => {
    // Validate form
    if (!validate()) {
      return;
    }

    // Here you would typically handle registration logic (API call, validation, etc.)
    const result = await callRegisterApi();
    if (result) {
      showSuccessToast(
        "Registration Successful",
        "You have signed up successfully."
      );
      navigateTo("OTP"); // or navigateToMainPage();
    } else if (registerError) {
      showErrorToast(
        "Registration Failed",
        registerError.message || "Attempt to register failed. Please try again."
      );
    }
  };

  const validate = () => {
    if (!name.trim()) {
      showErrorToast("Missing Name", "Name is required");
      return false;
    }
    if (!email.trim()) {
      showErrorToast("Missing Email", "Email is required");
      return false;
    }
    if (!validateEmailAddress(email)) {
      showErrorToast("Invalid Email", "Enter a valid email address");
      return false;
    }
    if (!password) {
      showErrorToast("Missing Password", "Password is required");
      return false;
    }
    if (!confirmPassword) {
      showErrorToast(
        "Missing Confirm Password",
        "Confirm Password is required"
      );
      return false;
    }
    if (!matchPasswords(password, confirmPassword)) {
      showErrorToast("Password Mismatch", "Passwords do not match");
      return false;
    }
    return true;
  };

  return {
    theme,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
  };
};
