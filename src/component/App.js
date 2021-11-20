import React,{Component} from "react";
import {connect} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import {handleInitialData} from '../actions/share'
import Login from "./login";
import Home from "./home";
import Question from './question'
import AddQuestion from "./addQuestion";
import leaderboard from "./leaderboard";
import {Switch} from 'react-router-dom';
import NoMatch from "./noMatch";


class App extends Component{
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/question/:id' component={Question} />
          <Route exact path='/addquestion' component={AddQuestion} />
          <Route exact path='/leaderboard' component={leaderboard} />
          <Route component = {NoMatch} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default connect()(App)
