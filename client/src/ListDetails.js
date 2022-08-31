import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function ListDetails({ list, handleUpdateList }) {
  const [user, setUser] = useState([])
  const { id } = useParams()


  useEffect(() => {
    fetch(`/lists/${id}`)
    .then(res => res.json())
    .then(list => setUser(list.user))
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
    <div>
      <p key={list.num1}>1. {list.num1}</p> 
      <p key={list.num2}>2. {list.num2}</p>
      <p key={list.num3}>3. {list.num3}</p>
      <p key={list.num4}>4. {list.num4}</p>
      <p key={list.num5}>5. {list.num5}</p>
      <p key={user.id}>By: <b>{user.username}</b></p>
      <p key={list.likes}>Likes: {list.likes}</p>
      <button onClick={handleLikeClick}>Like ❤️</button>
    </div>
  )
}

export default ListDetails