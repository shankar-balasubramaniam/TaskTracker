import {Provider} from 'react-redux';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/rtk/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
