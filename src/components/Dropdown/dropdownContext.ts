import { createContext, useContext } from "react";

const DropdownContext = createContext<{
  dropdownOption: string;
  changeDropdownOption: (option: string) => void;
}>({
  dropdownOption: "",
  changeDropdownOption: (option: string) => {},
});

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Error in creating the context");
  }
  return context;
};

export { useDropdownContext, DropdownContext };
