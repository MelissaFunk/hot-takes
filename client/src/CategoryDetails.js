import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ListDetails from './ListDetails'

function CategoryDetails() {
  const [category, setCategory] = useState([])
  const [lists, setLists] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`/categories/${id}`)
    .then(res => res.json())
    .then(cat => {
      setCategory(cat)
      setLists(cat.lists)
    })
  }, [id])

  return(
    <div>
      <h2>{category.category}</h2>
      {lists.map(list => {
        return <ListDetails key={list.id} list={list} />
      })}
      <Link to="/"><button>Back to Categories</button></Link>
    </div>
  )
}
export default CategoryDetails