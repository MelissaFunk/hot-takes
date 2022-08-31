import { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import Login from './Login'

function Old({ currentUser, setCurrentUser }) {
  const [categories, setCategories] = useState([])
  const [loginButtonPopup, setLoginButtonPopup] = useState(false)

  useEffect(() => {
    fetch('/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  const CategoryCards = categories.slice(-5).map(cat =>
    <CategoryCard key={cat.id} cat={cat} currentUser={currentUser}/>
    )
  
  return(
    <div>
      <h2>Old Categories</h2>
      {currentUser.username ? 
      <p>Submit your Top 5 in the categories below!</p>
      :
      <div>
        <button onClick={() => setLoginButtonPopup(true)}>Login or Sign Up</button>
        <Login trigger={loginButtonPopup} setTrigger={setLoginButtonPopup} setCurrentUser={setCurrentUser}></Login>
        <p>to add your Top 5 in the categories below!</p>
      </div>
      }

      {CategoryCards}
    </div>
  )
}

export default Old