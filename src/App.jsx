import React from 'react';
import './App.css';
import projectsData from './projects.json';

// 1. IMPORTAR OS ÍCONES
// 'fa' vem do FontAwesome, 'si' vem do Simple Icons (para o Vite)
import { 
  FaGithub, 
  FaLinkedin, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaJs, 
  FaMobileAlt 
} from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

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
          <p>Desenvolvedor Front-end</p>
          
          <div className="header-social">
            {/* Adicionamos os ícones <FaGithub /> e <FaLinkedin /> antes do texto */}
            <a 
              href="https://github.com/indiobagual" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn github"
            >
              <FaGithub size={20} /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/guilherme-aaparecido" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn linkedin"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        
        <section className="about-section">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou um desenvolvedor apaixonado por criar interfaces modernas e responsivas.
            Tenho experiência em transformar designs em código funcional utilizando React e boas práticas de UI/UX.
            Estou sempre à procura de novos desafios para evoluir as minhas competências técnicas.
          </p>
        </section>

        <section className="skills-section">
          <h2>Tecnologias</h2>
          <div className="skills-grid">
            {/* Adicionamos ícones em cada etiqueta */}
            <span className="skill-tag"><FaReact /> React</span>
            <span className="skill-tag"><FaJs /> JavaScript</span>
            <span className="skill-tag"><FaHtml5 /> HTML5</span>
            <span className="skill-tag"><FaCss3Alt /> CSS3</span>
            <span className="skill-tag"><FaGitAlt /> Git</span>
            <span className="skill-tag"><SiVite /> Vite</span>
            <span className="skill-tag"><FaMobileAlt /> Responsive</span>
          </div>
        </section>

        <section id="projetos">
          <h2 style={{ marginBottom: '30px' }}>Meus Projetos</h2>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>© 2025 - Desenvolvido com React por Indio Aparecido</p>
      </footer>
    </div>
  );
}

export default App;