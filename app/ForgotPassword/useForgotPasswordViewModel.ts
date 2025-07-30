import { useState } from "react";

import { useApi } from "@/hooks/useApi";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useToast } from "@/providers/ToastProvider";
import { validateEmailAddress } from "@/utils/generalUtils";
import { useNavigationUtils } from "@/utils/navigationUtils";

export const useForgotPasswordViewModel = () => {
  const theme = useColorScheme() ?? "light";
  const [email, setEmail] = useState("");
  const { navigateTo } = useNavigationUtils();
  const { showSuccessToast, showErrorToast } = useToast();

  const validate = () => {
    if (!email) {
      showErrorToast("Missing Field", "Email is required");
      return false;
    }
    if (!validateEmailAddress(email)) {
      showErrorToast("Incorrect email address", "Enter a valid email address");
      return false;
    }
    return true;
  };

  const handleForgotPassword = async () => {
    // Validate
    if (!validate()) return;

    const result = await callForgotPasswordApi();
    if (result) {
      showSuccessToast(
        "Password Reset",
        `If an account exists for ${email}, a reset link will be sent.`
      );

      setTimeout(() => {
        navigateTo("Login");
      }, 1500);
    } else if (forgotPasswordError) {
      showErrorToast(
        "Something went wrong",
        forgotPasswordError.message ||
          "Couldn't send email to the entered address. Please try again."
      );
    } else {
      showErrorToast(
        "Unknown Error",
        "An unexpected error occurred. Please try again."
      );
    }
  };

  // Setup the API hook for forgot password
  const {
    data: forgotPasswordData,
    error: forgotPasswordError,
    loading: forgotPasswordLoading,
    callApi: callForgotPasswordApi,
  } = useApi(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    let resp = {
      body: "Email sent successfully",
      status: 200,
      statusText: "OK",
    };
    return resp;
    // const response = await api.post("/forgotPassword", { email });
    // return response.data
  });

  return {
    theme,
    email,
    setEmail,
    handleForgotPassword,
  };
};
