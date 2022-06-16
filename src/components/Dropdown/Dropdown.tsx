import React, { ReactNode, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group"

import useClickOutside from "../../hooks/useOutsideClick";
import { DropdownContext } from "./dropdownContext";


import "../../assets/scss/Dropdown.scss"

interface Props {
  children: ReactNode | ReactNode[] | any;
  defaultValue?: string;
  placeholder?: string;
  variant?: string | any;
}

const Dropdown: React.FC<Props> = ({ children, defaultValue, placeholder, variant = '' }) => {
  const [dropdownOption, setDropdownOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const dropdownPlaceholder = placeholder || "Choose an option";
  const dropdownContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useClickOutside(dropdownContainerRef, clickOutsideHandler);

  const updateDropdownOption = (option: string) => {
    setDropdownOption(option);
    setShowDropdown(false);
  };

  return (
    <DropdownContext.Provider
      value={{ dropdownOption, changeDropdownOption: updateDropdownOption }}
    >
      <div className={`select-container ${variant}`} ref={dropdownContainerRef}>
        <div
          className={showDropdown ? `selected-text active ${variant}` : `selected-text ${variant}`}
          onClick={showDropdownHandler}
        >
          {dropdownOption.length > 0 ? dropdownOption : dropdownPlaceholder}
        </div>
        <CSSTransition in={showDropdown} timeout={1000} classNames="dropdown-items">
          <ul
            className={
              showDropdown
                ? `select-options show-dropdown-options ${variant}`
                : "select-options hide-dropdown-options"
            }
          >
            {React.Children.map(children, child => (
              React.cloneElement(child, { variant })
            ))}
          </ul>
        </CSSTransition>
      </div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
