import React from 'react';
import './App.css';

// 1. IMPORTAÇÃO DOS DADOS
// O Vite/React permite importar JSON diretamente e converte-o para Javascript automaticamente.
import projectsData from './projects.json';

const ProjectCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} className="card-image" />
      <div className="card-content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <a 
          href={data.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-link"
        >
          Aceder ao Projeto
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>Portfólio  <span>Guilherme Aparecido</span></h1>
          <p>Desenvolvedor Front-end | UI/UX Enthusiast</p>
        </div>
      </header>

      <main className="container">
        <div className="projects-grid">
          
          {/* 2. USAR A VARIÁVEL IMPORTADA */}
          {/* Agora usamos 'projectsData' em vez da variável antiga */}
          
          {projectsData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
          
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
        <p>© 2025 - Desenvolvido com React.</p>
      </footer>
    </div>
  );
}

export default App;