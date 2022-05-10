import React from 'react'
import { Link } from "react-router-dom";

function GroupsItem(props) {
  console.log(props.group)
  return (
    <div className="group">
      <div className="group__image">
        <img
          src={
            'http://localhost:1337' +
            props.group.attributes.image.data.attributes.url
          }
          alt=""
        />
      </div>
      <div className="group__title">{props.group.attributes.number}</div>
      <div className="group__button"><Link to={props.group.attributes.number}>выбрать</Link></div>
    </div>
  )
}

export default GroupsItem
