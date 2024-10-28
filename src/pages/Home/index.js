import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  const projects = [
    {
      title: 'WiFiPls',
      description: 'Neste projeto, explorei o componente NavMesh para construir caminhos e navegação de IA inimiga em um ambiente 3D. Através desse projeto, aprofundei meu entendimento na implementação de movimento inteligente de inimigos, aprimorando a lógica de IA e criando uma jogabilidade interativa.',
      link: 'https://yanvictor.itch.io/wifipls'
    },
    {
      title: 'Penguin Does Fly',
      description: 'Desenvolvi este jogo com foco na geração procedural de desafios, testando e implementando mecânicas que criam obstáculos e níveis de forma dinâmica e aleatória. Esse projeto foi essencial para entender o equilíbrio entre aleatoriedade e controle, garantindo uma jogabilidade diversificada e divertida.',
      link: 'https://yanvictor.itch.io/penguin'
    },
    {
      title: 'Minimal Watermelon Suika Game',
      description: 'Neste projeto, testei minhas habilidades de integração com serviços externos ao desenvolver um leaderboard online para acompanhar e exibir as pontuações dos jogadores. Isso me permitiu entender melhor a comunicação entre o cliente (jogo) e o servidor, proporcionando uma experiência competitiva aos jogadores.',
      link: 'https://yanvictor.itch.io/suika-watermelon-minimalist'
    }
  ];

  return (
    <div>
      <section id="about" className="my-5">
        <Container>
          <Row>
            <Col md={4}>
              <img src={`${process.env.PUBLIC_URL}/yanface.jpeg`} alt="Yan GameDev" className="img-fluid rounded-circle" />
            </Col>
            <Col md={8}>
              <h2 className="section-title">Sobre</h2>
              <p style={{ textAlign: 'justify' }}>
                Atualmente cursando Análise e Desenvolvimento de Sistemas e Engenharia Elétrica, com
                experiência no desenvolvimento de jogos 2D e 3D utilizando Unity e C#. Sou apaixonado
                por criar experiências envolventes e criativas, com sólido conhecimento em programação e
                game design. Mantenho um portfólio ativo no itch.io, onde compartilho meus projetos. Com
                experiência em ciência de dados, também tenho facilidade em análise e otimização de
                sistemas para o desenvolvimento de jogos.
                Tenho uma página no Instagram (@devprograma) onde compartilho insights sobre
                programação e desenvolvimento de jogos.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="projects" className="my-5">
        <Container>
          <h2 className="section-title">Projetos</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index}>
                <Card className="mb-4 project-card">
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link href={project.link} target="_blank" className="project-link">Ver no Itch.io</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="contact" className="my-5 text-center">
        <h2 className="section-title">Contato</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <p><FaPhone /> Telefone: (48) 98804-7117</p>
            <p><FaEnvelope /> Email: yanvsteinhaus@gmail.com</p>
            <div className="social-links">
              <a href="https://github.com/YanSteinhaus" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/yan-victor-steinhaus-072637242/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Home;
