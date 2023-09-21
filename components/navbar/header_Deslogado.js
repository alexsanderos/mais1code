import Layout from '../components/layout/layout'
import '.header_deslogado.scss';
 
export default function Header () {
  return <>
<header>
    <nav>

        <a href="header_deslogado.html" class="home"><img src="Icones/AlgarIcon.png" alt="Home"></a>

        <section class="pesquisa">
            <form class="barra-pesquisa">
                <input type="text" class="barra-texto" placeholder="">
                <a href="#" class="botão-pesquisa">
                    <img src="Icones/lupa.png" ealt="Pesquisar" />
                </a>
            </form>
        </section>

        <ul>
            <li><a href="header_deslogado.html">Cadastrar</a></li>
            <li><a href="header_deslogado.html">Entrar</a></li>
        </ul>

    </nav>
</header>
</>

}
