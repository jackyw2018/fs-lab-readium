import React from 'react';

import Navbar from './Navbar';
import Stories from './Stories';
import SingleStory from './SingleStory';
import Authors from './Authors';
import SingleAuthor from './SingleAuthor';

import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div id="main">
          <div className="column container">
            <div id="header">
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Switch>
            <Route path="/stories" component={Stories} />
            <Route path="/stories/:storyId" component={SingleStory} />
            <Route path="/authors/:authorId" component={SingleAuthor} />
            <Route path="/authors" component={Authors} />
            <Route path="/" component={Stories} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
