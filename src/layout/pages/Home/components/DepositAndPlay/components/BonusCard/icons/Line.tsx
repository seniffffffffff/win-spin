import { BaseIcon } from "components/icons/BaseIcon/BaseIcon";
import React from "react";

export const Line: React.FC = () => {
  return (
    <BaseIcon
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="66"
      viewBox="0 0 2 66"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M0.851562 0V66"
        stroke="url(#paint0_linear_36_237)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_36_237"
          x1="1.35156"
          y1="0"
          x2="1.35156"
          y2="66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD0B0B" stopOpacity="0" />
          <stop offset="0.509312" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </BaseIcon>
  );
};
