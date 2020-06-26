import React from "react";
import {
    Link
} from "react-router-dom";

function Redirect({to, title, children, icon, card}) {
  return (
    <Link to={to} title={title} className={icon ? "redirect" : card ? "redirect-card" : "redirect link"}>
        {children}
    </Link>
  );
}

export default Redirect;
