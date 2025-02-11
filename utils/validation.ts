import credentials from '../credentials.json';

export const validateUsername = (username: string): boolean => {
  return username.length >= 5;
};

export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
};

export const authenticateUser = (username: string, password: string): boolean => {
  return credentials.users.some(
    user => user.username === username && user.password === password
  );
};
