import { Fire } from "../icons/Fire";
import "./styles.css";

type TButtonVariant = "green" | "red" | "grayBlue" | "purple";

type TNavButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant: TButtonVariant;
  onClick?: () => void;
};

export const FireButton: React.FC<TNavButtonProps> = ({
  children,
  icon,
  onClick,
  variant,
}) => {
  const buttonClass = (variant: TButtonVariant) => {
    switch (variant) {
      case "green":
        return "green-button";
      case "red":
        return "red-button";
      case "grayBlue":
        return "gray-blue-button";
      case "purple":
        return "purple-button";
      default:
        return "green-button";
    }
  };

  return (
    <button className={`fire-button ${buttonClass(variant)}`} onClick={onClick}>
      <div className="fire-button-div">
        <Fire />
      </div>
      {icon}
      {children}
    </button>
  );
};
