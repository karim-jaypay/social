import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, Redirect } from 'react-router-dom';

import Content from './components/Content';

function App() {

  const history = useHistory();


  return <Router history={history}>
      <Switch>
          <Route exact path="/en/social" component={Content} />
          <Route path="/en/social/:social" component={Content} />
          <Route path="/es/social" component={Content} />
          <Route path="/pt/social" component={Content} />
          <Route path="/zh/social" component={Content} />
      </Switch>
  </Router>
  
}

export default App;
