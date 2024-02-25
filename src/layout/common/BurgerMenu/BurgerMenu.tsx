import { useState } from "react";
import "./styles.css";
import { Burger } from "./icons/Burger";
import Menu from "./components/Menu/Menu";
import burgerFlame from "./assets/red-fire.webp";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <div>
      <button className="burger" onClick={() => handleOpen(!isOpen)}>
        <img src={burgerFlame} className="flame" />
        <Burger />
      </button>
      {isOpen && <Menu open={isOpen} />}
    </div>
  );
};

export default BurgerMenu;
