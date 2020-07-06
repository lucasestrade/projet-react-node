import React from "react";
import Cta from './Cta';

function Submit({onClick, children}) {
  return (
    <Cta submit={true} ctaStyle="cta-submit" onClick={onClick} >
        {children}
    </Cta>
  );
}

export default Submit;
