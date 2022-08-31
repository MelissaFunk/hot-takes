import { useState } from 'react'
import { Link } from 'react-router-dom'

function CategoryCard({ cat, currentUser }) {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [num3, setNum3] = useState("")
  const [num4, setNum4] = useState("")
  const [num5, setNum5] = useState("")

  const handleListSubmit = (e) => {
    e.preventDefault()
    fetch('/lists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        num1: num1,
        num2: num2,
        num3: num3,
        num4: num4,
        num5: num5,
        category_id: cat.id,
        user_id: 1 // need to update to currentUser.id
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    e.target.reset()
  }

  return(
    <div>
      <h2>{cat.category}</h2>
      <form onSubmit={handleListSubmit}>
        <label>1. </label>
        <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <label>2. </label>
        <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)}/>
        <label>3. </label>
        <input type="text" value={num3} onChange={(e) => setNum3(e.target.value)}/>
        <label>4. </label>
        <input type="text" value={num4} onChange={(e) => setNum4(e.target.value)}/>
        <label>5. </label>
        <input type="text" value={num5} onChange={(e) => setNum5(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      <Link to={`/categories/${cat.id}`}><button>See Lists</button></Link>
    </div>
  )
}

export default CategoryCard