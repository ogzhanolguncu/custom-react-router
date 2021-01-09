import React, { useContext, useLayoutEffect, useState } from 'react';
import { createBrowserHistory, Location, State } from 'history';
import { locationToRoute } from './Utils';
import { NotFound } from '../404';
import { RoutesType } from '../routes';

const history = createBrowserHistory();

export const RouterContext = React.createContext({
  route: locationToRoute(history),
});

type Props = {
  routeList: RoutesType;
  children: React.ReactNode;
};

const RouterProvider = ({ routeList, children }: Props) => {
  const [routes] = useState(
    Object.keys(routeList).map((key) => routeList[key].path)
  );
  const [route, setRoute] = useState(locationToRoute(history));

  const handleRouteChange = (location: { location: Location<State> }) => {
    const route = locationToRoute(location);
    setRoute(route);
  };
  const is404 = routes.indexOf(route.path) === -1;
  const routerContextValue = { route };

  useLayoutEffect(() => {
    let unlisten = history.listen(handleRouteChange);
    return () => {
      unlisten();
    };
  }, []);

  return (
    <RouterContext.Provider value={routerContextValue}>
      {is404 ? <NotFound /> : children}
    </RouterContext.Provider>
  );
};

const useRouter = () => {
  const context = useContext(RouterContext);

  return context;
};

export { useRouter, RouterProvider, history };
