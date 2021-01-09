import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Project from './components/Project'
import { fadeIn } from './effects/fadeIn'
import { getProjects } from './queries/projectQueries'
import { ProjectType } from './types'

const App = () => {
  const [loading, setLoading] = useState(true) as any
  const [projects, setProjects] = useState<ProjectType[] | undefined>(undefined)

  useEffect(() => {
    getProjects()
      .then(projects => projects.length > 0 && setProjects(projects))
      .then(setLoading(false))
  }, [])

  useEffect(() => {
    !loading && window.addEventListener('scroll', fadeIn)
  })

  if (loading) {
    return <Header />
  }

  return (
    <>
      <Header />
      <div>
        {projects &&
          projects.map(project => (
            <Project key={project._id} project={project} />
          ))}
      </div>
    </>
  )
}

export default App
