import { useState } from "react";

import { useApi } from "@/hooks/useApi";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useToast } from "@/providers/ToastProvider";
import { validateEmailAddress } from "@/utils/generalUtils";
import { useNavigationUtils } from "@/utils/navigationUtils";

export const useLoginViewModel = () => {
  const theme = useColorScheme() ?? "light";
  const { showSuccessToast, showErrorToast } = useToast();
  const { navigateToMainPage, navigateTo } = useNavigationUtils();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Setup the API hook for login
  const {
    data: loginData,
    error: loginError,
    loading: loginLoading,
    callApi: callLoginApi,
  } = useApi(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    let resp = {
      body: "Login successful",
      status: 200,
      statusText: "OK",
    };
    return resp;
    // const response = await api.post("/login", { email, password });
    // return response.data
  });

  const handleLogin = async () => {
    // Validate email and password
    if (!email.trim() || !password) {
      showErrorToast("Missing Fields", "Email and password are required");
      return;
    }
    if (!validateEmailAddress(email)) {
      showErrorToast("Incorrect email address", "Enter a valid email address");
      return;
    }

    const result = await callLoginApi();
    if (result) {
      showSuccessToast("Login Successful", "You have logged in successfully.");
      navigateTo("OTP"); // or navigateTo("Home");
    } else if (loginError) {
      showErrorToast(
        "Login Failed",
        loginError.message || "Login failed. Please try again."
      );
    }
  };

  const handleRegister = () => {
    console.log("handleRegister");
    navigateTo("Register");
  };

  const handleForgotPassword = () => {
    console.log("handleForgotPassword");
    navigateTo("ForgotPassword");
  };

  // Social login handlers can be added here if needed
  const handleLoginWithGoogle = () => {
    console.log("Google login");
    navigateToMainPage();
  };

  const handleLoginWithFacebook = () => {
    console.log("Facebook login");
    navigateToMainPage();
  };

  const handleLoginWithApple = () => {
    console.log("Apple login");
    navigateToMainPage();
  };

  return {
    theme,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    loginLoading,
    loginError,
    loginData,
    handleRegister,
    handleForgotPassword,
    handleLoginWithGoogle,
    handleLoginWithFacebook,
    handleLoginWithApple,
  };
};
