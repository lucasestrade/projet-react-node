import React from "react";

function Cta({ctaStyle, onClick, children}) {
  return (
    <button className={ctaStyle} 
    onClick={onClick}>
        {children}
    </button>
  );
}

export default Cta;
