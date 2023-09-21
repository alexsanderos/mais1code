import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <header className="header">
          <nav className="nav">
  
          
  
            <a href="header_deslogado.html" className="home">
              <img src="Icones/AlgarIcon.png" alt="Home" />
            </a>
  
  
            <section className="pesquisa">
              <form className="barra-pesquisa">
                <input type="text" className="barra-texto" placeholder="" />
                <a href="#" className="botão-pesquisa">
                  <img src="Icones/lupa.png" ealt="Pesquisar" />
                </a>
              </form>
            </section>
  
            
  
            <ul className="menu">
              <li><a href="header_deslogado.html">Cadastrar</a></li>
              <li><a href="header_deslogado.html">Entrar</a></li>
            </ul>
  
          </nav>
        </header>
      );
}