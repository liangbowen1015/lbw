import React from 'react';
import Xing from './router/index'
import store from './store/store'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <Xing/>
    </Provider>
  );
}

export default App;
