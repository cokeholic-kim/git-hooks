import React from 'react'

function Nav({lists}){
    return(
      <ul>
        {lists.map(li=><li key={li.id}>{li.title}</li>)}
      </ul>
    )
  }

export default Nav