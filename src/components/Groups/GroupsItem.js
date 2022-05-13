import React from 'react'
import { Link } from "react-router-dom";

function GroupsItem(props) {
  console.log(props.group)
  return (
    <div className="group">
      <div className="image">
        <img style={{opacity: 0.7}}
          src={
            'http://localhost:1337' +
            props.group.attributes.image.data.attributes.url
          }
          alt=""
        />
      </div>
      <div className="title">{props.group.attributes.number}</div>
      <Link to={props.group.attributes.number}><div className="button">выбрать</div></Link>
    </div>
  )
}

export default GroupsItem
