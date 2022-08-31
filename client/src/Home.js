import { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

function Home({ currentUser }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])

  const CategoryCards = categories.map(cat =>
    <CategoryCard key={cat.id} cat={cat} currentUser={currentUser}/>
    )

  return(
    <div>
      <h4>Submit your Top 5 in the categories below!</h4>
      {CategoryCards}
    </div>
  )
}

export default Home