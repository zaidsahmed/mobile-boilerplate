import { useRouter } from "expo-router";

export const useNavigationUtils = () => {
  const router = useRouter();

  const dismissAll = () => {
    router.dismissAll();
  };
  const replace = (path: string) => {
    router.replace(("/" + path) as any);
  };
  const navigateTo = (path: string) => {
    router.push(("/" + path) as any);
  };
  const navigateToMainPage = () => {
    dismissAll();
    router.replace("/Home");
  };

  return {
    dismissAll,
    replace,
    navigateTo,
    navigateToMainPage,
  };
};
