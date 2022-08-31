import { Link } from 'react-router-dom'

function NavBar({ currentUser }) {
  return(
    <div>
      <h1>Hot Takes</h1>
      {currentUser.username ? <Link to="/my-lists">My Lists</Link> : null}
    </div>
  )
}

export default NavBar