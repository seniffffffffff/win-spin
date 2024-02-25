import React, { useState } from "react";

type TTargetProps = {
  open: boolean;
  onClick: () => void;
};

type TAccordion = {
  target: (x: TTargetProps) => JSX.Element;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

const Accordion: React.FC<TAccordion> = ({
  target,
  defaultOpen = false,
  children,
}) => {
  const [open, setIsOpen] = useState<boolean>(defaultOpen);

  const handleClick = () => {
    setIsOpen(!open);
  };

  return (
    <>
      {target({ open, onClick: handleClick })}
      <div className="open-accordion">{open && children}</div>
    </>
  );
};

export default Accordion;
