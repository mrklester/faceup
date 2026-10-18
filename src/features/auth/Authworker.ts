import { useState } from 'react';

export const useTogglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return { isPasswordVisible, togglePassword };
};
