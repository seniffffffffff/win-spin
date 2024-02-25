import { BaseIcon } from "components/icons/BaseIcon/BaseIcon";
import { TIcon } from "components/icons/types";
import React from "react";

export const SelectArrow: React.FC<TIcon> = ({ ...props }) => {
  return (
    <BaseIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
    >
      <g clipPath="url(#clip0_599_10)">
        <path
          d="M6.48581 9.51507C6.32228 9.51527 6.16058 9.48059 6.01151 9.41334C5.86244 9.34609 5.72942 9.24782 5.62135 9.12509L0.716053 3.54932C0.561014 3.36455 0.484418 3.12646 0.502642 2.88595C0.520866 2.64545 0.632464 2.42161 0.813574 2.26232C0.994683 2.10302 1.23093 2.02091 1.4718 2.03353C1.71266 2.04615 1.93903 2.15251 2.1025 2.32987L6.39182 7.20567C6.40355 7.21905 6.418 7.22977 6.43421 7.23712C6.45042 7.24447 6.46801 7.24827 6.48581 7.24827C6.50361 7.24827 6.5212 7.24447 6.53741 7.23712C6.55362 7.22977 6.56808 7.21905 6.57981 7.20567L10.8691 2.32987C10.9482 2.23559 11.0454 2.15807 11.1549 2.10187C11.2644 2.04568 11.384 2.01194 11.5068 2.00264C11.6295 1.99334 11.7528 2.00867 11.8696 2.04772C11.9863 2.08678 12.094 2.14877 12.1864 2.23005C12.2788 2.31134 12.3541 2.41028 12.4077 2.52106C12.4613 2.63184 12.4923 2.75222 12.4987 2.87513C12.5052 2.99804 12.487 3.121 12.4452 3.23678C12.4035 3.35255 12.339 3.45882 12.2556 3.54932L7.35178 9.12309C7.24351 9.24612 7.1103 9.34471 6.96099 9.41229C6.81168 9.47988 6.6497 9.51491 6.48581 9.51507Z"
          fill="#A8A8A8"
        />
      </g>
      <defs>
        <clipPath id="clip0_599_10">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </BaseIcon>
  );
};
