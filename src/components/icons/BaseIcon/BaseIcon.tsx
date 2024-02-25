import React, { SVGProps } from "react";
import "./styles.css";

type TDirection = "up" | "down" | "left" | "right" | undefined;

type TBaseIconProps = {
  width: string;
  height: string;
  direction?: TDirection;
  children: React.ReactNode;
} & SVGProps<SVGSVGElement>;

export const BaseIcon: React.FC<TBaseIconProps> = ({
  children,
  direction,
  height,
  width,
}) => (
  <div className={direction ? `icon-container ${direction}` : "icon-container"}>
    <svg width={width} height={height}>
      {children}
    </svg>
  </div>
);
