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

  const handleUpdateList = (listToUpdate) => {
    setLists(lists.map(list => list.id === listToUpdate.id ? listToUpdate : list))
  }

  const Lists = lists.map(list =>
    <ListDetails key={list.id} list={list} handleUpdateList={handleUpdateList}/>
    )

  return(
    <div>
      <div className="back-btn-div">
        <Link to="/"><button className="back-btn">Back to Categories</button></Link>
      </div>
      <h2 className="cat-title">{category.category}</h2>
      <div className="list-container">{Lists}</div>
    </div>
  )
}
export default CategoryDetails