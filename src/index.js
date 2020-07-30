import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./index.css"

import Home from './pages/Home'
import RegisterVideo from './pages/RegisterVideo';
import RegisterCategory from './pages/RegisterCategory';

const Page404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

