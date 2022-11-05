import React from 'react'
import GroupsItem from './GroupsItem'

function Groups(props) {
  return <div className='groups'>{props.groups.map(group => <GroupsItem key={group.id} group={group}/>)}</div>
}

export default Groups
