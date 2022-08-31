import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import CategoryDetails from './CategoryDetails'
import ListDetails from './ListDetails'
import MyLists from './MyLists'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  return (
    <div>
      <NavBar currentUser={currentUser}/>
      <Switch>
        <Route exact path="/"><Home currentUser={currentUser}/></Route>
        <Route exact path="/categories/:id"><CategoryDetails /></Route>
        <Route exact path="/lists/:id"><ListDetails /></Route>
        <Route exact path="/my-lists"><MyLists /></Route>
      </Switch>
    </div>
  );
}

export default App;
