import { Link } from 'react-router-dom'
import { useHistory } from "react-router"

function NavBar({ currentUser, setCurrentUser }) {
  const history = useHistory()

  const handleLogout = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            setCurrentUser({})
            history.push("/")
        }
    })
}  

  return(
    <div>
      <h1>Hot Takes! Welcome {currentUser.username}</h1>
      <Link to="/">New</Link>
      <Link to="/old">Old</Link>
      {currentUser.username ? <Link to="/my-lists">My Lists</Link> : null}
      {currentUser.username ? <button onClick={() => handleLogout()}>Logout</button> : null }
    </div>
  )
}

export default NavBar