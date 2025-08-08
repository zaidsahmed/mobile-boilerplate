import { useCallback, useEffect } from "react";

import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";

export default function Index() {
  // Ensure the auth session completes when the app is launched from the browser
  WebBrowser.maybeCompleteAuthSession();

  const { redirectToLogin } = useNavigationViewModel();

  useEffect(() => {
    redirectToLogin();
  }, [redirectToLogin]);

  return null;
}

function useNavigationViewModel() {
  const router = useRouter();

  const redirectToLogin = useCallback(() => {
    router.replace("/Login");
  }, [router]);

  return {
    redirectToLogin,
  };
}
