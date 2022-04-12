import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import "./scrollTop.css";

export const ScrollTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVesible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) return setVesible(true);
    setVesible(false);
  }, [pageYOffset]);

  const smothScrol = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="scroll-top" onClick={smothScrol}>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </div>
  );
};
