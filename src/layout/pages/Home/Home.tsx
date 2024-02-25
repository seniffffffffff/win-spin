import { useState } from "react";
import { Games } from "../../../components/icons/Games/Games";
import { LiveDealers } from "../../../components/icons/LiveDealers/LiveDealers";
import { Promotions } from "../../../components/icons/Promotions/Promotions";
import { Tournaments } from "../../../components/icons/Tournaments/Tournaments";
import BaseLayout from "../../BaseLayout";
import { DepositAndPlay } from "./components/DepositAndPlay/DepositeAndPlay";
import { FireButton } from "components/buttons/FireButton/FireButton";
import MarqueeLine from "./components/Marquee/Marquee";
import "./styles.css";

export const Home: React.FC = () => {
  return (
    <BaseLayout>
      <div className="home-wrapper">
        <DepositAndPlay />
        <div className="buttons-group">
          <FireButton variant="green" icon={<Games />}>
            Game slots
          </FireButton>
          <FireButton variant="red" icon={<LiveDealers />}>
            Live casino
          </FireButton>
          <FireButton variant="grayBlue" icon={<Promotions />}>
            Promotions
          </FireButton>
          <FireButton variant="purple" icon={<Tournaments />}>
            Tournaments
          </FireButton>
        </div>
        <MarqueeLine />
      </div>
    </BaseLayout>
  );
};
