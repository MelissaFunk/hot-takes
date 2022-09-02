import { useState, useEffect } from 'react'

function MyLists({ currentUser }) {
  const [myLists, setMyLists] = useState([])

  useEffect(() => {
    fetch(`/lists`)
      .then(res => res.json())
      .then(setMyLists)
  }, [])

  const onlyMyLists = myLists.filter(list => {
    if(list.username === currentUser.username) {
      return true
    }
  })

  const listsToDisplay = onlyMyLists.map(list =>
    <div className="list-card">
      <h3 className="mylist-cat-title">{list.category.category}</h3>
      <p key={list.num1}>1. {list.num1}</p> 
      <p key={list.num2}>2. {list.num2}</p>
      <p key={list.num3}>3. {list.num3}</p>
      <p key={list.num4}>4. {list.num4}</p>
      <p key={list.num5}>5. {list.num5}</p>
      <p key={list.likes} className="likes">Likes: {list.likes}</p>
    </div>
  )

  return(
    <div>
      <h2 className="mylist-title">My Lists</h2>
      <div className="list-container">{listsToDisplay}</div>
    </div>
  )
}

export default MyLists