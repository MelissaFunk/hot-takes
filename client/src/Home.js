import { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import Login from './Login'

function Home({ currentUser, setCurrentUser }) {
  const [categories, setCategories] = useState([])
  const [loginButtonPopup, setLoginButtonPopup] = useState(false)

  useEffect(() => {
    fetch('/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  const CategoryCards = categories.slice(-3).reverse().map(cat =>
    <CategoryCard key={cat.id} cat={cat} currentUser={currentUser}/>
    )
   
  return(
    <div>
      <h2 className="page-title">New Categories</h2>
      {currentUser.username ? 
      <p className="page-desc">Submit your Top 5 in the categories below!</p>
      :
      <div className="login-div">
        <button onClick={() => setLoginButtonPopup(true)} className="login-sign-btn">Login or Sign Up</button>
        <Login trigger={loginButtonPopup} setTrigger={setLoginButtonPopup} setCurrentUser={setCurrentUser}></Login>
        <p className="login-desc">to add your Top 5 in the categories below!</p>
      </div>
      }
      <div className="cat-container">{CategoryCards}</div>
    </div>
  )
}

export default Home