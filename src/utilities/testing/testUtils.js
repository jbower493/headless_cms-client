/*----------Imports----------*/
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

/*---------- Rendering helpers ----------*/
export const renderWithRedux = (ui, reduxStore = store()) => {
  return {
    ...render(
      <Provider store={reduxStore}>
        {ui}
      </Provider>
    ),
    store: reduxStore
  };
};

export const renderWithRouter = (ui, route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Router history={history}>
        {ui}
      </Router>
    ),
    history
  };
};

export const renderWithBoth = (ui, route = '/', reduxStore = store()) => {
  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={reduxStore}>
        <Router history={history}>
          {ui}
        </Router>
      </Provider>
    ),
    history,
    store: reduxStore
  };
};

/*---------- Mock helpers ----------*/
export const mockLoader = () => <div>Loading</div>;

/************** Other Helpers **************/
export const debugFull = () => screen.debug(undefined, 10000000000);