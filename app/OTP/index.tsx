import React from "react";
import { TextInput, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants";
import { useLocalization } from "@/hooks/useLocalization";
import BackButton from "../../components/BackButton";
import styles from "./styles";
import { useOTPViewModel } from "./useOTPViewModel";

const OTPVerificationScreen = () => {
  const { theme, otp, handleChange, verifying, handleVerify } =
    useOTPViewModel();
  const stylesObj = styles(theme);
  const { t } = useLocalization();

  return (
    <ThemedView style={stylesObj.container}>
      <BackButton />
      <ThemedText type="title" style={stylesObj.title}>
        {t("otp.title")}
      </ThemedText>
      <ThemedText style={stylesObj.label}>{t("otp.label")}</ThemedText>
      <TextInput
        style={stylesObj.input}
        value={otp}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={6}
        placeholder={t("otp.placeholder")}
        placeholderTextColor={
          theme === "light" ? Colors.light.gray60 : Colors.dark.gray60
        }
        textAlign="center"
        autoFocus
      />
      {/* {error ? <ThemedText style={stylesObj.error}>{error}</ThemedText> : null}
      {success ? (
        <ThemedText style={stylesObj.success}>{success}</ThemedText>
      ) : null} */}
      <TouchableOpacity
        style={[stylesObj.button, verifying && stylesObj.buttonDisabled]}
        onPress={handleVerify}
        disabled={verifying}
        activeOpacity={0.8}
      >
        <ThemedText style={stylesObj.buttonText}>
          {verifying ? t("otp.verifying") : t("otp.verifyButton")}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default OTPVerificationScreen;
