import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactPage from './components/ContactPage'
import ContactListPage from './components/ContactListPage'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={ContactListPage} />
          <Route path="/contact/:id" component={ContactPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App