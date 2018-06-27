import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import HomePage from './HomePage'
import Question from './Question'
import ShowQuestion from './ShowQuestion'
import Login from './Login'
import Register from './Register'

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/app' component={App}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/questions' component={Question}/>
          <Route path='/showquestions' component={ShowQuestion}/>
          <Route path='/login' component={Login}/>
          <Route path='/regist' component={Register}/>
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default Root;
