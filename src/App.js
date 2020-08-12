import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import NewPageComponent from './components/NewPageComponent';

const App = () => {
  return (
    <Router>
      <div className="App regularFont">
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/newComponent' component={NewPageComponent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
