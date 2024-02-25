import React, { useState } from "react";
import { SelectArrow } from "./icons/SelectArrow";
import "./styles.css";

type TSelectOptions = {
  value: string;
  label: string;
  id: number;
};

type TSelectProps = {
  name: string;
  placeholder?: string;
  options: TSelectOptions[];
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
};

export const Select: React.FC<TSelectProps> = ({
  placeholder,
  options,
  onChange,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<TSelectOptions | null>(
    null
  );
  const [searchValue] = useState("");

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowMenu(!showMenu);
  };

  const onItemClick = (option: TSelectOptions) => {
    setShowMenu(false);
    setSelectedValue(option);
    onChange && onChange(option.value);
  };

  const isSelected = (option: TSelectOptions) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <div className="custom--dropdown-container">
      <div onClick={handleInputClick} className="dropdown-input">
        <div
          className={`dropdown-selected-value 
          `}
        >
          {placeholder && !selectedValue ? placeholder : selectedValue?.label}
        </div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <SelectArrow direction={showMenu ? "down" : "up"} />
          </div>
        </div>
      </div>

      {showMenu && (
        <div className={`dropdown-menu alignment-- auto`}>
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
