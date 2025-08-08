import { useEffect, useState } from "react";

import { useApi } from "@/hooks/useApi";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useToast } from "@/providers/ToastProvider";
import { validateEmailAddress } from "@/utils/generalUtils";
import { useNavigationUtils } from "@/utils/navigationUtils";

import * as Google from "expo-auth-session/providers/google";

export const useLoginViewModel = () => {
  const theme = useColorScheme() ?? "light";
  const { showSuccessToast, showErrorToast } = useToast();
  const { navigateToMainPage, navigateTo } = useNavigationUtils();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const googleClientId =
    "210248883878-khqggcfhmc8rmfhje70bjqq8mlgirbj9.apps.googleusercontent.com"; // android id -- debug
  // "210248883878-gbkh8sva62nf92tvnusq9deek8cg9hp6.apps.googleusercontent.com"; // web id

  // Replace these with your actual client IDs from the Google Cloud Console
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: googleClientId,
    iosClientId: googleClientId,
    webClientId: googleClientId,
    scopes: ["profile", "email"],
  });
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log({ response });

    // This effect runs whenever the 'response' object changes
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication) {
        // Exchange the access token for user info
        fetchUserInfo(authentication.accessToken);
      }
    }
  }, [response]);
  const fetchUserInfo = async (token: string) => {
    setIsLoading(true);
    try {
      const googleApiUrl = "https://www.googleapis.com/userinfo/v2/me";
      const response = await fetch(googleApiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      setUserInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

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
  const handleLoginWithGoogle = async () => {
    console.log("Google login");
    // navigateToMainPage();
    try {
      await promptAsync();
      console.log({ userInfo });
    } catch (error) {
      console.error("Google Sign-In failed:", error);
    }
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
