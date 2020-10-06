import React from 'react';
import './App.css';
import Navigation from './components/Nav';
import Trending from './components/trendingGif';
import Upload from './components/uploadGif';
import Search from './components/Search';
import Preview from './components/Preview';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path = "/trending" exact component = {Trending} />
          <Route path = "/search" component = {Search} />
          <Route path = "/upload" component = {Upload} />
          <Route path = "/preview" component = {Preview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;