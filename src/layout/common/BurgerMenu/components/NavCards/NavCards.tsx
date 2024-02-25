import { TCardMenu } from "../../types";
import "./styles.css";

export const NavCards: React.FC<TCardMenu> = ({ icon, title, link }) => {
  return (
    <a className="card-link" href={link}>
      {icon}
      {title}
    </a>
  );
};
