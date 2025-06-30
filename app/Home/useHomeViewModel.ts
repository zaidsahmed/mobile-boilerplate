import { useColorScheme } from '@/hooks/useColorScheme';

export const useHomeViewModel = () => {
  const theme = useColorScheme() ?? 'light';
  return { theme };
};
