import React, { useState, useEffect } from 'react'
import './App.css'
import Project from './components/Project/Project'
import { getProjects } from './queries/projectQueries'

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(projects => projects.length > 0 && setProjects(projects))
  }, [])

  return (
    <div>
      {projects.map(project => (
        <Project project={project} />
      ))}
    </div>
  )
}

export default App
