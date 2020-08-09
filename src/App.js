import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/Home';
import EditorPage from './pages/Editor';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/editor' exact component={EditorPage} />
      </Switch>
    </BrowserRouter>
  );
}