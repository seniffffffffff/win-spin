import Marquee from "react-fast-marquee";
import topBigMountain from "../../assets/top-pick-mount.webp";
import bottomSmallMountain from "../../assets/bottom-pick-mount.webp";
import flag from "../../assets/flag.webp";
import casinoImg from "../../assets/casino-name.webp";

import "./styles.css";

const MarqueeLine = () => {
  return (
    <div className="marquee-content-wrapper">
      <div className="top-pic-div">
        <img src={topBigMountain} className="top-picture w100"></img>
      </div>

      <Marquee direction="left" className="marquee">
        <div className="marquee-content">
          <img src={flag} />
          <div className="big-text">
            Recent <span className="yellow">winners</span>
          </div>

          <div className="small-text">
            Robert - €18.75 in s <span className="yellow">Sun of Egypt</span>
          </div>
          <img src={casinoImg} alt="casinoImg" />
          <div className="small-text">
            Robert - €18.75 in <span className="yellow">Crystal Fruits</span>
          </div>
        </div>
      </Marquee>
      <img src={bottomSmallMountain} className="bottom-img-div w100" />
    </div>
  );
};

export default MarqueeLine;
