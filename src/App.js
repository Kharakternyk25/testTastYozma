import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer';

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact/:id" component={Contact} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;