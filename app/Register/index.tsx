import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalization } from "@/hooks/useLocalization";
import BackButton from "../../components/BackButton";
import styles from "./styles";
import { useRegisterViewModel } from "./useRegisterViewModel";

const RegisterScreen = () => {
  const {
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
  } = useRegisterViewModel();
  const stylesObj = styles(theme);
  const { t } = useLocalization();

  return (
    <ThemedView style={stylesObj.container}>
      <BackButton />
      <ThemedText type="title" style={stylesObj.title}>
        {t("register.title")}
      </ThemedText>
      <View style={stylesObj.form}>
        <TextInput
          style={stylesObj.input}
          placeholder={t("register.name")}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        <TextInput
          style={stylesObj.input}
          placeholder={t("register.email")}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={stylesObj.input}
          placeholder={t("register.password")}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={stylesObj.input}
          placeholder={t("register.confirmPassword")}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        {/* <Button title={t('register.registerButton')} onPress={handleSubmit} /> */}
        <TouchableOpacity style={stylesObj.button} onPress={handleSubmit}>
          <ThemedText style={stylesObj.buttonText}>
            {t("register.registerButton")}
          </ThemedText>
        </TouchableOpacity>

        {/* {submitted && (
          <ThemedText style={stylesObj.successMsg}>
            {t('register.success')}
          </ThemedText>
        )} */}
      </View>
    </ThemedView>
  );
};

export default RegisterScreen;
