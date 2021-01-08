import React, { useState, useEffect } from 'react'
import './App.css'
import Project from './components/Project/Project'
import { getProjects } from './queries/projectQueries'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
      .then(projects => projects.length > 0 && setProjects(projects))
      .then(setLoading(false))
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <h1>JE Boska</h1>
      </div>
      <div>
        {projects.map(project => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </>
  )
}

export default App
