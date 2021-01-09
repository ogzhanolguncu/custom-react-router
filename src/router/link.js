import React from "react";
import { RouterContext, history } from "./context"

export function Link(props) {

  const { to, onClick, children } = props;

  // Extract route from RouterContext
  const { route } = React.useContext(RouterContext);

  const handleClick = (e) => {

    e.preventDefault();

    // Dont' navigate if current path
    if (route.path === to) {
      return;
    }

    // Trigger onClick prop manually
    if (onClick) {
      onClick(e);
    }

    // Use history API to navigate page
    history.push(to)

  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );

}