import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/Home';
import EditorPage from './pages/Editor';
import BlogPage from './pages/Blog';
import TextBlockEditor from './Editor/index';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={TextBlockEditor} />
        <Route path='/home' exact component={HomePage} />
        <Route path='/editor' exact component={EditorPage} />
        <Route path='/blog' exact component={BlogPage} />
      </Switch>
    </BrowserRouter>
  );
}