import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Groups from '../components/Groups/Groups'

function Home() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    axios('http://localhost:1337/api/groups?populate=image')
      .then((res) => res.data)
      .then((result) => {
        setGroups(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <Groups groups={groups} />
}

export default Home
