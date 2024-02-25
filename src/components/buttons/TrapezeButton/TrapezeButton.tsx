import {
  getButtonColor,
  getButtonSize,
  getPolygonPoints,
  getTextColor,
} from "./utils";
import { TParallelepipedButtonProps } from "../types";
import "./styled.css";
import { useState } from "react";

const TrapezeButton: React.FC<TParallelepipedButtonProps> = ({
  direction = "up",
  variant = "primary",
  size = "s",
  gradient,
  children,
  onClick,
}) => {
  const [isOnClicked, setIsOnClicked] = useState(false);
  const { width, height } = getButtonSize(size);

  const onClickEffect = isOnClicked && variant === "primary";
  const buttonColor = onClickEffect ? "#9F0400" : getButtonColor(variant);
  const textColor = onClickEffect ? "#05071A" : getTextColor(variant);
  const points = getPolygonPoints(direction, width, height);

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }

    setIsOnClicked(true);
    
    setTimeout(() => {
      setIsOnClicked(false);
    }, 100);
  };

  return (
    <button
      className={`trapezoid-button ${gradient && "gradient"}`}
      onClick={handleOnClick}
    >
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="rounded">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 
              0 1 0 0 0 
              0 0 1 0 0 
              0 0 0 18 -7"
              result="rounded"
            />
            <feComposite in="SourceGraphic" in2="rounded" operator="in" />
          </filter>
        </defs>
        <polygon
          points={points}
          fill={onClickEffect ? "#9F0400" : buttonColor}
          filter="url(#rounded)"
        />
        <text
          fill={textColor}
          x={width / 2}
          y={height / 2 + 1}
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="14px"
          className="trapeze-button-text"
        >
          {children}
        </text>
      </svg>
    </button>
  );
};

export default TrapezeButton;
