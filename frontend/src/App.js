import React, { useState, useEffect } from 'react'

import Header from './components/Header'

import api from './services/api'

import './App.css'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function addProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`])

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Emerson Developer'
    })

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title} - {project.owner}</li>)}
      </ul>

      <button type="button" onClick={addProject}>Adicionar projeto</button>
    </>
  )
}

export default App
