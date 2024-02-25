import React, { useState } from "react";
import { Checked } from "./icons/Checked";
import { Default } from "./icons/Default";

type TRadio = {
  name?: string;
  id?: string;
  checked?: boolean;
  value?: string;
  onChange?: () => void;
};

const Radio: React.FC<TRadio> = ({ checked, value, id, name, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    if (onChange && id) {
      onChange();
    }
    setIsChecked(!isChecked);
  };

  return (
    <label className="radio-label">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={isChecked}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
      {isChecked ? <Checked /> : <Default />}
    </label>
  );
};

export default Radio;
