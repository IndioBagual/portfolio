import React from 'react';
import './App.css';
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
          Acessar o Projeto
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
          <h1>Portfólio <span>Guilherme Aparecido</span></h1>
          <p>Desenvolvedor Front-end | UI/UX Enthusiast</p>
          
          {/* Adicionamos os botões aqui */}
          <div className="header-social">
            <a 
              href="https://github.com/indiobagual" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn github"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/seu-perfil" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn linkedin"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </header>

      <main className="container">
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px 20px', color: '#666', marginTop: '40px' }}>
        <p>© 2025 - Desenvolvido com React.</p>
      </footer>
    </div>
  );
}

export default App;