import React from 'react'
import '../../assets/genre.css'

export const Genre = (props) => {
  return (
    <div className="genre"><span>{props.children}</span></div>
  )
}
