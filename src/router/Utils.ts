import { Location, State } from 'history';
import qs from 'querystringify';

type Props = {
  location: Location<State>;
};

export function locationToRoute({ location }: Props) {
  return {
    path: location.pathname,
    hash: location.hash,
    query: qs.parse(location.search),
  };
}
