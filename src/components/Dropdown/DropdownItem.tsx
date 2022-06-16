import React, { ReactNode } from "react";
import { useDropdownContext } from "./dropdownContext";

const DropdownItem: React.FC<{
  children: ReactNode | ReactNode[];
  value: string;
  variant?: string;
}> = ({ children, value, variant }) => {
  const { changeDropdownOption } = useDropdownContext();

  return (
    <li className={`select-option item ${variant}`} onClick={() => changeDropdownOption(value)}>
      {children}
    </li>
  );
};

export default DropdownItem;
