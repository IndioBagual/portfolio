import React from 'react';
import './App.css';

// 1. Dados dos Projetos (Simulando uma API ou JSON)
// Substitui pelos teus links reais
const projects = [
  {
    id: 1,
    title: "E-commerce React",
    description: "Loja virtual completa com carrinho de compras usando Context API.",
    image: "https://via.placeholder.com/400x200?text=E-commerce",
    link: "https://teu-link-aqui.com"
  },
  {
    id: 2,
    title: "Landing Page Institucional",
    description: "Página responsiva com foco em conversão e SEO otimizado.",
    image: "https://via.placeholder.com/400x200?text=Landing+Page",
    link: "https://teu-link-aqui.com"
  },
  {
    id: 3,
    title: "Dashboard Financeiro",
    description: "Interface administrativa para gestão de gastos pessoais.",
    image: "https://via.placeholder.com/400x200?text=Dashboard",
    link: "https://teu-link-aqui.com"
  }
];

// 2. Componente ProjectCard (Recebe 'data' via props)
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

// 3. Componente Principal App
function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Meu Portfólio <span>React</span></h1>
          <p>Desenvolvedor Front-end | UI/UX Enthusiast</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        <div className="projects-grid">
          {/* Loop (Map) para renderizar os cards */}
          {projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </main>

      {/* Footer Simples */}
      <footer style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
        <p>© 2024 - Desenvolvido com React.</p>
      </footer>
    </div>
  );
}

export default App;