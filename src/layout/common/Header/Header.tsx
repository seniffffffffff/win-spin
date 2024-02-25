import { SearchButton } from "../../../components/buttons/SearchButton/Search";
import { Logo } from "../../../components/icons/Logo/Logo";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <SearchButton />
    </header>
  );
};

export default Header;
