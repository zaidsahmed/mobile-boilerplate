import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants";
import { Theme, useNavigation, useTheme } from "@react-navigation/native";
import { ThemedText } from "./ThemedText";

// Placeholder for icons; replace with your icon library if needed
const LeftIcon = () => (
  <View
    style={{
      width: 20,
      height: 20,
      backgroundColor: "gray",
      borderRadius: 10,
      marginRight: 8,
    }}
  />
);
const RightIcon = () => (
  <View
    style={{
      width: 20,
      height: 20,
      backgroundColor: "gray",
      borderRadius: 10,
      marginLeft: 8,
    }}
  />
);

export const CustomButtonTypes = {
  fill: "fill",
  outline: "outline",
  link: "link",
};

const CustomButton = ({
  title = "",
  btnType = CustomButtonTypes.fill,
  btnStyle = {},
  btnTextStyle = {},
  onPressFunc = () => {},
  showLeftIcon = false,
  showRightIcon = false,
}: {
  title: string;
  btnType?: string;
  btnStyle?: StyleProp<ViewStyle>;
  btnTextStyle?: StyleProp<TextStyle>;
  onPressFunc?: () => void;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styleObj = styles(theme);

  let buttonStyle =
    btnType === CustomButtonTypes.fill
      ? styleObj.button
      : btnType === CustomButtonTypes.outline
      ? [styleObj.button, styleObj.buttonOutline]
      : btnType === CustomButtonTypes.link
      ? {}
      : styleObj.button;

  let buttonTextStyle =
    btnType === CustomButtonTypes.fill
      ? styleObj.buttonText
      : btnType === CustomButtonTypes.outline
      ? [styleObj.buttonText, styleObj.buttonOutlineText]
      : btnType === CustomButtonTypes.link
      ? styleObj.linkButtonStyle
      : styleObj.buttonText;

  return (
    <TouchableOpacity style={[buttonStyle, btnStyle]} onPress={onPressFunc}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {showLeftIcon &&
          (btnType === CustomButtonTypes.fill ||
            btnType === CustomButtonTypes.outline) && <LeftIcon />}
        <ThemedText style={[buttonTextStyle, btnTextStyle]}>{title}</ThemedText>
        {showRightIcon &&
          (btnType === CustomButtonTypes.fill ||
            btnType === CustomButtonTypes.outline) && <RightIcon />}
      </View>
    </TouchableOpacity>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      width: "100%",
      padding: 14,
      borderRadius: 8,
      alignItems: "center",
      marginBottom: 12,
      backgroundColor: theme.dark ? Colors.dark.primary : Colors.light.primary,
    },
    buttonText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: "bold",
    },
    buttonOutline: {
      // width: "100%",
      backgroundColor: Colors.transparent,
      borderColor: theme.dark ? Colors.dark.primary : Colors.light.primary,
      borderWidth: 1,
      // padding: 14,
      // borderRadius: 8,
      // alignItems: "center",
    },
    buttonOutlineText: {
      color: theme.dark ? Colors.dark.primary : Colors.light.primary,
      // fontSize: 16,
      // fontWeight: "bold",
    },
    linkButtonStyle: {
      color: !theme.dark ? Colors.light.primary : Colors.dark.primary,
      alignSelf: "flex-end",
      marginBottom: 24,
    },
  });

export default CustomButton;
