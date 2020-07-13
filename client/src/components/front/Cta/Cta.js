import React from "react";

function Cta({ctaStyle, onClick, submit, children}) {
  return (
    <button className={ctaStyle} 
    onClick={onClick} type={submit ? "submit" : null}>
        {children}
    </button>
  );
}

export default Cta;
