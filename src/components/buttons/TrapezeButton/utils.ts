import {
  TButtonSize,
  TParallelepipedDirection,
  TParallelepipedVariantButtonProps,
} from "../types";

export const getButtonSize = (
  size: TButtonSize
): { width: number; height: number } => {
  switch (size) {
    case "s":
      return { width: 132, height: 45 };
    case "m":
      return { width: 188, height: 45 };
    case "l":
      return { width: 188, height: 45 };
    case "xl":
      return { width: 310, height: 50 };
    default:
      return { width: 132, height: 45 };
  }
};

export const getPolygonPoints = (
  direction: TParallelepipedDirection,
  width: number,
  height: number
) => {
  return direction === "up"
    ? `10,0 ${width - 10},0 ${width},${height} 0,${height}`
    : `0,0 ${width},0 ${width - 10},${height} 10,${height}`;
};

export const getButtonColor = (variant: TParallelepipedVariantButtonProps) => {
  switch (variant) {
    case "primary":
      return "rgba(252, 194, 17, 1)";
    case "secondary":
      return "rgba(79, 92, 105, 0.77)";

    default:
      return "rgba(252, 194, 17, 1)";
  }
};

export const getTextColor = (variant: TParallelepipedVariantButtonProps) => {
  switch (variant) {
    case "primary":
      return "#05071a";
    case "secondary":
      return "#fff";
    default:
      return "primary";
  }
};
