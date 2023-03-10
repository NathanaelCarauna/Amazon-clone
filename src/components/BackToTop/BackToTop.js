import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 750) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="back-top-container">
          Back to top
        </div>
      )}
    </div>
  );
};

export default BackToTop;
