import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from '../App';
import Home from '../Home'
import About from '../About'
import Members from '../Members'
import OurChapter from '../OurChapter'
import Calendar from '../Calendar'
import Connect from '../Connect'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/members" component={Members}/>
      <Route path="/ourchapter" component={OurChapter}/>
      <Route path="/calendar" component={Calendar}/>
      <Route path="/connect" component={Connect}/>
  </Route>
</Router>
)

export default routes;
