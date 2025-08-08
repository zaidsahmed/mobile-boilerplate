import React from "react";
import { TextInput } from "react-native";

import CustomButton, { CustomButtonTypes } from "@/components/CustomButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants";
import { useLocalization } from "@/hooks/useLocalization";
import styles from "./styles";
import { useLoginViewModel } from "./useLoginViewModel";

const LoginScreen = () => {
  const {
    theme,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleRegister,
    handleForgotPassword,
    handleLoginWithGoogle,
    handleLoginWithFacebook,
    handleLoginWithApple,
  } = useLoginViewModel();

  const stylesObj = styles(theme);
  const { t } = useLocalization();

  return (
    <ThemedView style={stylesObj.container}>
      <ThemedText type="title" style={stylesObj.title}>
        {t("login.title")}
      </ThemedText>
      <TextInput
        style={stylesObj.input}
        placeholder={t("login.email")}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={
          theme === "light" ? Colors.light.argent : Colors.dark.argent
        }
      />
      <TextInput
        style={stylesObj.input}
        placeholder={t("login.password")}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={
          theme === "light" ? Colors.light.argent : Colors.dark.argent
        }
      />

      <CustomButton
        title={t("login.forgotPassword")}
        onPressFunc={handleForgotPassword}
        btnType={CustomButtonTypes.link}
      />
      <CustomButton
        title={t("login.loginButton")}
        onPressFunc={handleLogin}
        showLeftIcon
      />
      <CustomButton
        title={t("login.registerButton")}
        onPressFunc={handleRegister}
        btnType={CustomButtonTypes.outline}
      />

      <ThemedText style={stylesObj.socialLoginText}>
        {t("login.orLoginWith")}
      </ThemedText>

      <CustomButton
        title={t("login.continueWithGoogle")}
        onPressFunc={handleLoginWithGoogle}
        btnStyle={stylesObj.google}
      />
      <CustomButton
        title={t("login.continueWithFacebook")}
        onPressFunc={handleLoginWithFacebook}
        btnStyle={stylesObj.facebook}
      />
      <CustomButton
        title={t("login.continueWithApple")}
        onPressFunc={handleLoginWithApple}
        btnStyle={stylesObj.apple}
      />
    </ThemedView>
  );
};

export default LoginScreen;
