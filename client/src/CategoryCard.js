import { useState } from 'react'
import { Link } from 'react-router-dom'

function CategoryCard({ cat, currentUser }) {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [num3, setNum3] = useState("")
  const [num4, setNum4] = useState("")
  const [num5, setNum5] = useState("")
  const [submitted, setSubmitted] = useState(false)

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
        user_id: currentUser.id,
        likes: 0
      })
    })
    .then(res => res.json())
    .then(setSubmitted(true))
    e.target.reset()
  }
 
  return(
    <div className="cat-card">
      <h3>{cat.category}</h3>
      {currentUser.username && submitted === false ? 
        <form onSubmit={handleListSubmit}>
          <div>
            <label className="cat-card-label1">1</label>
            <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)}/>
          </div>
          <div>
            <label className="cat-card-label">2</label>
            <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)}/>
          </div>
          <div>
            <label className="cat-card-label">3</label>
            <input type="text" value={num3} onChange={(e) => setNum3(e.target.value)}/>
          </div>
          <div>
            <label className="cat-card-label">4</label>
            <input type="text" value={num4} onChange={(e) => setNum4(e.target.value)}/>
          </div>
          <div>
            <label className="cat-card-label">5</label>
            <input type="text" value={num5} onChange={(e) => setNum5(e.target.value)}/>
          </div>
          <button type="submit" className="catcard-submit-btn">Submit</button>
        </form> 
      : null}
      {submitted === true ?
        <p>Submitted!</p>
        : null
      }
      <Link to={`/category/${cat.id}`}><button className="catcard-btn">See Submissions</button></Link>
    </div>
  )
}

export default CategoryCard