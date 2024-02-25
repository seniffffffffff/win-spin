import React from "react";
import "./styles.css";
import { Line } from "./icons/Line";
import { ArrowDown } from "components/icons/ArrowDown/ArrowDown";
import Radio from "components/Radio/Radio";
import { TCardColor } from "./types";

type BonusCardProps = {
  icon: React.ReactNode;
  bgColor: TCardColor;
  textWhite: string;
  textYellow: string;
  cardsOpen?: boolean;
  isSelectBonus?: boolean;
  isSelectedCard?: boolean;
  onClick?: () => void;
  selectBonus?: () => void;
};

export const BonusCard: React.FC<BonusCardProps> = ({
  bgColor,
  icon,
  textWhite,
  textYellow,
  cardsOpen,
  isSelectedCard,
  selectBonus,
  onClick,
}) => {
  return (
    <div className={`bonus-card-div ${bgColor}`}>
      <div className="icon-text-div">
        {icon}
        <div className="text-bonus-card">
          <div className="ws-nowrap">{textWhite}</div>
          <span className="yellow">{textYellow}</span>
        </div>
      </div>
      <div className="bonus-card-icons">
        {cardsOpen ? (
          <div>
            <Radio
              checked={isSelectedCard}
              name="welcome-bonus"
              id={textWhite}
              value={"123"}
              onChange={selectBonus}
            />
          </div>
        ) : (
          <>
            <Line />
            <div className="arrow-down-div" onClick={onClick}>
              <ArrowDown />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
