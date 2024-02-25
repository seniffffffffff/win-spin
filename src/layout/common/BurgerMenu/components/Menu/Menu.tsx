import Header from "layout/common/Header/Header";
import "./styles.css";
import { Satellite } from "../../icons/Satellite";
import FlagWithArrow from "../../icons/FlagWithArrow";
import TrapezeButton from "components/buttons/TrapezeButton/TrapezeButton";
import SearchBar from "components/SearchBar/SearchBar";
import { Games } from "components/icons/Games/Games";
import { Promotions } from "components/icons/Promotions/Promotions";
import { Tournaments } from "components/icons/Tournaments/Tournaments";
import { LiveDealers } from "components/icons/LiveDealers/LiveDealers";
import { Lottery } from "components/icons/Lottery/components";
import { HallOfFame } from "components/icons/HallOfFame/components";
import { Vip } from "components/icons/Vip/Vip";
import { Payment } from "components/icons/Payment/Payment";
import { Support } from "components/icons/Support/Support";
import { TCardMenu } from "../../types";
import { NavCards } from "../NavCards/NavCards";
import bigSkull from "../../assets/big-skull.webp";

type TMenuProps = {
  open: boolean;
};

const Menu: React.FC<TMenuProps> = ({ open }) => {
  const menuCategories: TCardMenu[] = [
    { title: "Games", icon: <Games />, link: "/games" },
    { title: "Promotions", icon: <Promotions />, link: "/promotions" },
    { title: "Tournaments", icon: <Tournaments />, link: "/tournaments" },
    { title: "Live dealers", icon: <LiveDealers />, link: "/live-dealers" },
    { title: "Lottery", icon: <Lottery />, link: "/lottery" },
    { title: "Hall of fame", icon: <HallOfFame />, link: "/hall-of-fame" },
    { title: "VIP", icon: <Vip />, link: "/vip" },
    { title: "Payment", icon: <Payment />, link: "/payment" },
    { title: "Support", icon: <Support />, link: "/support" },
  ];

  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <div className="menu-header">
        <Header />
        <div className="header-menu-icons">
          <Satellite />
          <FlagWithArrow />
        </div>
      </div>
      <div className="button-group">
        <TrapezeButton size="l" direction="down">
          Register
        </TrapezeButton>
        <TrapezeButton variant="secondary">Log in</TrapezeButton>
      </div>
      <div className="search-menu">
        <SearchBar placeholder="Game name or provider" />
      </div>
      <nav className="nav-links">
        <img src={bigSkull} className="big-skull-img" />
        {menuCategories.map((category) => (
          <NavCards {...category} key={category.title} />
        ))}
      </nav>
    </div>
  );
};

export default Menu;
