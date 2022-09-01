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
    <div className="navbar">
      <h1 className="navbar-title">HOT✰TAKES</h1>
      <Link to="/" className="navbar-link">NEW</Link>
      <Link to="/old" className="navbar-link">OLD</Link>
      {currentUser.username ? <Link to="/my-lists" className="navbar-link">MY LISTS</Link> : null}
      {currentUser.username ? <button onClick={() => handleLogout()} className="navbar-btn">LOGOUT</button> : null }
    </div>
  )
}

export default NavBar