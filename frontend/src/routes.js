import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Pesquisa from './pages/pesquisa/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Pesquisa} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
