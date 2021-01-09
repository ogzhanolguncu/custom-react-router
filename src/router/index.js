import React, { useState, useLayoutEffect } from "react";
import { locationToRoute } from "./utils";
import { history, RouterContext } from "./context";
import { Route } from "./route";
import { Link } from "./link";
import { NotFound } from "../404";

const Router = (props) => {
  const [routes, setRoutes] = useState(
    Object.keys(props.routes).map((key) => props.routes[key].path)
  );
  const [route, setRoute] = useState(locationToRoute(history.location));

  const handleRouteChange = (location) => {
    const route = locationToRoute(location);
    setRoute(route);
  };
  const is404 = routes.indexOf(route.path) === -1;
  const routerContextValue = { route };

  useLayoutEffect(() => {
    history.listen(handleRouteChange);
  }, []);

  return (
    <RouterContext.Provider value={routerContextValue}>
      {is404 ? <NotFound /> : props.children}
    </RouterContext.Provider>
  );
};

export { history, RouterContext, Router, Route, Link };
