import styles from './navbar.module.scss';

export default function Navbar() {
    return (
        <header className="header">
          <nav className="nav">
    
            <a href="/home_logado" className="home">
              <img src="./imgs/Icones/AlgarIcon.png" alt="Home" />
            </a>
   
            <section className="pesquisa">
              <form className="barra-pesquisa">
                <input type="text" className="barra-texto" placeholder="" />
                <a href="#" className="botao-pesquisa">
                  <img src="./imgs/Icones/lupa.png" ealt="Pesquisar" />
                </a>
              </form>
            </section>        
  
            <ul className="menu">
              <li><a href="/contato">Contatos</a></li>
              <li><a href="header_deslogado.html">Vagas</a></li>
            </ul>
  
          </nav>
        </header>
      );
}