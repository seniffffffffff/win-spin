import { Search } from "../../icons/Search/Search";
import "./styles.css";

type TProps = {
  onClick?: () => void;
};

export const SearchButton: React.FC<TProps> = ({ onClick }) => {
  return (
    <div className="search-icon" onClick={onClick}>
      <Search />
    </div>
  );
};
