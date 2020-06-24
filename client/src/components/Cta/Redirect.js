import React from "react";
import {
    Link
} from "react-router-dom";

function Redirect({to, title, children, icon}) {
  return (
    <Link to={to} title={title} className={icon ? "cta redirect" : "cta redirect link"}>
        {children}
    </Link>
  );
}

export default Redirect;
