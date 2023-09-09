import styles from './navbar.module.scss';

export default function Navbar() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    )
  }