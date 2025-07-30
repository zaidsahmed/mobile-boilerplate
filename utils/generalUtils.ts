export const validateEmailAddress = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim()) ? true : false;
};

export const matchPasswords = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword ? true : false;
};
