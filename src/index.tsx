import React, { SFC, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Calculator from './Calculator';
import DogList from './DogList';
import dogs from './containers/dogs';
import math from './containers/math';

const ConnectedDogList = dogs(DogList);
const ConnectedCalculator = math(Calculator);

const App: SFC = () => (
  <Provider store={store}>
    <Fragment>
      <ConnectedCalculator />
      <ConnectedDogList />
    </Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
