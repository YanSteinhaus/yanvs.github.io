import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#222', color: '#fff', padding: '20px 0' }}>
            <div className="container text-center">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} Todos os direitos reservados.
                </p>
                <div className='mb-1'>
                    <a href='https://yanvictor.itch.io/' style={{ color: '#61dafb' }} target="_blank" rel="noopener noreferrer">yanvictor.itch.io</a>
                </div>
                <div className="mt-2">
                    <a href="https://www.linkedin.com/in/yan-victor-steinhaus-072637242/" style={{ color: '#61dafb', marginRight: '10px' }} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <a href="https://github.com/YanSteinhaus" style={{ color: '#61dafb' }} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

