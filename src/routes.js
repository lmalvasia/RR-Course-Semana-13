import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import TodoList from './components/TodoList/TodoList';

const Routes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/todos' component={TodoList} />
      </Switch>
    </MainLayout>
  );
};

export default Routes;