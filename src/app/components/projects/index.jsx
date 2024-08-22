import React from 'react'
import ProjectLayout from './ProjectLayout';

const ProjectsList = ({projects}) => {
  return (
    <div className='w-full max-w-4xl px-16 space-y-16 flex flex-col items-center py-10'>
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project}/>
    })}</div>
  )
}

export default ProjectsList;