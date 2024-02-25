import React from "react";
import chainsImg from "../assets/chains.webp";
import Header from "layout/common/Header/Header";
import greenFire from "../assets/greenfire.webp";
import Footer from "./common/Footer/Footer";
import "./styles.css";

type TBaseLayoutProps = {
  children: React.ReactNode;
};

export const BaseLayout: React.FC<TBaseLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="base-layout-wrapper">
        <img src={greenFire} className="green-fire-img" />
        <img src={chainsImg} className="chains-img" />
        <div className="base-layout-content">
          <Header />
          <div className="base-layout-content-inner">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
