
/*comentario */
import React from "react";
import styles from "./navbar.module.scss"; // Corrija a importação

export default function Navbar() {
  return (
    <nav className={styles.navbar}> {/* Aplicando a classe .navbar */}
      <ul>
        <li><a href="/" className={styles.navLink}>Home</a></li> {/* Aplicando a classe .navLink */}
        <li><a href="/contato" className={styles.navLink}>Contato</a></li> {/* Aplicando a classe .navLink */}
      </ul>
    </nav>
  );
}