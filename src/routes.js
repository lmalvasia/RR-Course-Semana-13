import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';

const Routes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/characters' component={Characters} />
      </Switch>
    </MainLayout>
  );
};

export default Routes;