import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function ListDetails({ list }) {
  const [user, setUser] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`/lists/${id}`)
    .then(res => res.json())
    .then(cat => {
      setUser(cat.user)
    })
  }, [id])


  return(
    <div>
      <p key={list.num1}>1. {list.num1}</p> 
      <p key={list.num2}>2. {list.num2}</p>
      <p key={list.num3}>3. {list.num3}</p>
      <p key={list.num4}>4. {list.num4}</p>
      <p key={list.num5}>5. {list.num5}</p>
      <p key={user.id}>By: <b>{user.username}</b></p>
    </div>
  )
}

export default ListDetails