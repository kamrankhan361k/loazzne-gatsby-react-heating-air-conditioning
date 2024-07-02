import React from "react";
import { Link as A } from "gatsby";

const Link = ({ href, children, className }) => {
  return (
    <A to={href} className={className}>
      {children}
    </A>
  );
};

export default Link;
