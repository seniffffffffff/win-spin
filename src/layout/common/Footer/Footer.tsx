import TrapezeButton from "components/buttons/TrapezeButton/TrapezeButton";
import "./styles.css";
import BurgerMenu from "layout/common/BurgerMenu/BurgerMenu";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="z100">
        <TrapezeButton variant="secondary">Sign in</TrapezeButton>
      </div>
      <BurgerMenu />
      <div className="z100">
        <TrapezeButton direction="down" gradient>
          Sign up
        </TrapezeButton>
      </div>
    </footer>
  );
};

export default Footer;
