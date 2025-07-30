import { useState } from "react";
import { Keyboard } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useToast } from "@/providers/ToastProvider";
import { useNavigationUtils } from "@/utils/navigationUtils";

const OTP_LENGTHS = [4, 6];

export const useOTPViewModel = () => {
  const theme = useColorScheme() ?? "light";
  const { showSuccessToast, showErrorToast } = useToast();
  const { navigateToMainPage } = useNavigationUtils();

  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);

  const handleChange = (text: string) => {
    // Only allow numbers, max 6 digits
    const sanitized = text.replace(/[^0-9]/g, "").slice(0, 6);
    setOtp(sanitized);
  };

  const handleVerify = () => {
    if (verifying) return;
    Keyboard.dismiss();
    if (!OTP_LENGTHS.includes(otp.length)) {
      showErrorToast("Incorrect OTP", "OTP must be 4 or 6 digits");
      setVerifying(false);
      return;
    }
    setVerifying(true);

    // Simulate verification (replace with real logic)
    setTimeout(() => {
      setVerifying(false);
      showSuccessToast("OTP verified", "OTP has been verified!");
    }, 1000);

    // Navigate to Home after verification
    setTimeout(() => {
      navigateToMainPage();
    }, 1500);
  };

  return {
    theme,
    otp,
    setOtp,
    verifying,
    handleChange,
    handleVerify,
  };
};
