import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Old from './Old'
import Login from './Login'
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
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/"><Home currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
        <Route exact path="/old"><Old currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
        <Route exact path="/login"><Login setCurrentUser={setCurrentUser}/></Route>
        <Route exact path="/categories/:id"><CategoryDetails /></Route>
        <Route exact path="/lists/:id"><ListDetails /></Route>
        <Route exact path="/my-lists"><MyLists currentUser={currentUser}/></Route>
      </Switch>
    </div>
  );
}

export default App;
