import React from "react";
import {
    Link
} from "react-router-dom";

function Redirect(params) {
  return (
      <Link to={params.to}>
          {params.value}
      </Link>
  );
}

export default Redirect;
