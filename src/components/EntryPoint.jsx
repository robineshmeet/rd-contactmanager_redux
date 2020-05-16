import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import AddContact from './contacts/AddContact';
import EditContact from './contacts/EditContact';
import Contacts from './contacts/Contacts';
import About from './pages/About';
import NotFound from './pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class EntryPoint extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
