import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Project from '../components/Project'
import { fadeIn } from '../effects/fadeIn'
import { getProjects } from '../queries/projectQueries'
import { ProjectType } from '../types'

const Portfolio = () => {
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

  return (
    <>
      <Header />
      <div>
        {projects &&
          !loading &&
          projects.map((project, index) => (
            <Project index={index} key={project._id} project={project} />
          ))}
        <div style={{ height: 1200 }}></div>
      </div>
    </>
  )
}

export default Portfolio
