import React, { useEffect, useState } from "react";
import bigFlame from "../../assets/big-flame.webp";
import "./styles.css";
import { Select } from "components/Select/Select";
import TrapezeButton from "components/buttons/TrapezeButton/TrapezeButton";
import { BonusCard } from "./components/BonusCard/BonusCard";
import chestImg from "../../assets/chest.webp";
import blueChest from "../../assets/blue-chest.webp";
import goldBag from "../../assets/gold-bag.webp";

import { TCardColor } from "./components/BonusCard/types";

type TBonusCard = {
  bgColor: TCardColor;
  icon: React.ReactNode;
  textWhite: string;
  textYellow: string;
  cardsOpen: boolean;
  isSelectedCard?: boolean;
  onClick?: () => void;
  selectBonus?: () => void;
};

export const DepositAndPlay = () => {
  const [cardsOpen, setCardOpen] = useState<boolean>(false);
  const [bonusCard, setBonusCard] = useState<TBonusCard | null>(null);
  const [, setBonusCards] = useState<TBonusCard[]>([]);

  const handleCardOpen = () => {
    setCardOpen((prev) => !prev);
  };

  const handleCardSelect = (id: string) => {
    bonusCardsInfo = bonusCardsInfo.map((card, index) => {
      return index === Number(id)
        ? { ...card, isSelectedCard: true, cardsOpen: false }
        : { ...card, isSelectedCard: false };
    });
    setBonusCards(bonusCardsInfo);
    setBonusCard(bonusCardsInfo[Number(id)]);

    setTimeout(() => {
      setCardOpen(!cardsOpen);
      // im not sure if this is the best way to do it
      // but i don`t understand the logic of the cardsOpen
    }, 100);
  };

  let bonusCardsInfo: TBonusCard[] = [
    {
      bgColor: "red",
      icon: <img src={chestImg} />,
      textWhite: "Welcome bonus",
      textYellow: "100% up to €500 +120 FreeSpins",
      cardsOpen: cardsOpen,
      isSelectedCard: false,
      onClick: () => {
        handleCardOpen();
      },
      selectBonus: () => handleCardSelect("0"),
    },
    {
      bgColor: "purple",
      icon: <img src={goldBag} />,
      textWhite: "First Deposit Bonus",
      textYellow: "100% up to €500 +120 FreeSpins",
      cardsOpen: cardsOpen,
      isSelectedCard: false,
      onClick: () => {
        handleCardOpen();
      },
      selectBonus: () => handleCardSelect("1"),
    },
    {
      bgColor: "blue",
      icon: <img src={blueChest} />,
      textWhite: "No Bonus",
      textYellow: "I do not want a Welcome bonus ",
      cardsOpen: cardsOpen,
      isSelectedCard: false,
      onClick: () => {
        handleCardOpen();
      },
      selectBonus: () => handleCardSelect("2"),
    },
  ];

  useEffect(() => {
    setBonusCard(bonusCardsInfo[0]);
  }, []);

  return (
    <div className={`deposit-div ${cardsOpen ? "deposit-div-opened" : ""}`}>
      <img src={bigFlame} className="big-flame-img" />
      <h2 className="article">Deposit and play</h2>
      <div className="welcome-card">
        {!cardsOpen && (
          <>
            {bonusCard && <BonusCard {...bonusCard} />}
            <div className="selects-div">
              <Select
                name="country"
                placeholder="Country"
                options={[
                  { value: "Afghanistan", label: "Afghanistan", id: 1 },
                  { value: "Andorra", label: "Andorra", id: 2 },
                  { value: "Anguilla", label: "Anguilla", id: 3 },
                  { value: "Argentina", label: "Argentina", id: 4 },
                  { value: "Armenia", label: "Armenia", id: 5 },
                  { value: "Azerbaijan", label: "Azerbaijan", id: 6 },
                  { value: "Bahamas", label: "Bahamas", id: 7 },
                  { value: "Bahrain", label: "Bahrain", id: 8 },
                ]}
              />
              <Select
                name="fiat"
                placeholder="Fiat"
                options={[
                  { value: "EUR", label: "EUR", id: 1 },
                  { value: "USD", label: "USD", id: 2 },
                  { value: "YEN", label: "YEN", id: 3 },
                ]}
              />
            </div>
            <TrapezeButton size="xl" direction="down">
              Start with your 100% bonus
            </TrapezeButton>
          </>
        )}

        <div className={`card-container ${cardsOpen ? "open" : ""}`}>
          {cardsOpen &&
            bonusCardsInfo.map((card) => (
              <BonusCard {...card} key={card.textWhite} />
            ))}
        </div>
      </div>
    </div>
  );
};
