import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Cart from './containers/cart';
import TaskList from './containers/taskList';
import Checkout from './containers/checkout';
//bootstrap components
import { Alert } from 'react-bootstrap';

export const PageNotFound = () => {
  return <Alert bsStyle="danger"><strong>Error:</strong> The page you're looking for does not exist!</Alert>
}

class App extends Component {

  render() {
    return (
      <div className="container">
          <div className="row alert alert-success text-center">
            <h3>Shopping Cart Demo</h3>
            <h4>(ReactJS + Redux)</h4>
          </div>
          <hr />
          <div className="row">
            <Link to="/shopping" className="btn btn-primary pull-left">Let's shop...</Link>
            <Link to="/cart" className="btn btn-danger pull-right">
              <Cart />
            </Link>
          </div>
          <br />
          <Switch>
            <Route path="/" render={() => <Redirect to="/shopping" />} exact />
            <Route path="/shopping" component={TaskList} />
            <Route path="/cart" component={Checkout} />
            <Route path="**" component={PageNotFound} />
          </Switch>
      </div>
    );
  }
}

export default App;
