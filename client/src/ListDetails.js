import { useEffect } from 'react'
import { useParams } from 'react-router'

function ListDetails({ list, handleUpdateList }) {
  const { id } = useParams()


  useEffect(() => {
    fetch(`/lists/${id}`)
    .then(res => res.json())
    .then(list => console.log(list)) 
  }, [id])


  const handleLikeClick = () => {
    fetch(`/lists/${list.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: list.likes + 1 })
    })
    .then(res => res.json())
    .then(list => handleUpdateList(list))
  }


  return(
    <div className="list-card">
      <p key={list.num1}>1. {list.num1}</p> 
      <p key={list.num2}>2. {list.num2}</p>
      <p key={list.num3}>3. {list.num3}</p>
      <p key={list.num4}>4. {list.num4}</p>
      <p key={list.num5}>5. {list.num5}</p>
      <p key={list.id} className="by-user">By: {list.username}</p>
      <p key={list.likes} className="likes">Likes: {list.likes}</p>
      <button onClick={handleLikeClick} className="like-btn">Like ❤️</button>
    </div>
  )
}

export default ListDetails