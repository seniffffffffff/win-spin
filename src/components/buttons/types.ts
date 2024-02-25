export type TButtonSize = "s" | "m" | "l" | 'xl';

export type TParallelepipedDirection = "up" | "down";

export type TParallelepipedVariantButtonProps = "primary" | "secondary";

export type TParallelepipedButtonProps = {
  direction?: TParallelepipedDirection;
  gradient?: boolean;
  variant?: TParallelepipedVariantButtonProps;
  size?: TButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
};
