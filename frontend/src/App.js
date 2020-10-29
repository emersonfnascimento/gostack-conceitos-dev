import React, { useState } from 'react'

import Header from './components/Header'

import backgroundImg from './assets/background.jpg'
import './App.css'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

  function addProject() {
    // projects.push(`Novo projeto ${Date.now()}`)

    setProjects([...projects, `Novo projeto ${Date.now()}`])

    console.log(projects)
  }

  return (
    <>
      <Header title="Homepage" />

      <img src={backgroundImg} alt="Background" width={400} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={addProject}>Adicionar projeto</button>
    </>
  )
}

export default App
