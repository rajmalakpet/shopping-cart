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
          <div className="well" style={{backgroundColor:'#ac1a17'}}>
            <span style={{fontWeight:'bold', color:'#fff', paddingLeft: '10px'}}>Shopping Cart Demo (ReactJS + Redux)</span>
            <Link to="/cart" style={{marginTop:'-5px'}} className="btn btn-danger customBtn pull-right"><Cart /></Link>
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
