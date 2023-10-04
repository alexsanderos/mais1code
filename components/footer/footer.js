
  import React from "react";
import styles from "./footer.module.scss"; // Certifique-se de criar o arquivo CSS/SCSS correspondente e importá-lo aqui

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src="https://www.institutoalgar.org.br/wp-content/uploads/2022/08/algar-logo.svg" alt="Logo" />
        </div>
        <div className={styles.footerInfo}>
          <p>Instituto Algar</p>
          <p>Programas</p>
          <div class="contact flex flex-col">
        <p class={text-p3 font-bold uppercase text-blue mb-16 tracking-[0.12em]}>
          Fale conosco        </p>
          <p className={styles.footerInfo} >
                    Tel 1: (34) 99670-5729 <br></br>
                    Tel 2: (34) 3218-3061 <br></br>
                    Email: contato@institutoalgar.org.br <br></br>
                    End: Rua Lapa do Lobo, 800 <br></br>
                    Bairro Granja Marileusa <br></br>
                    Cep: 38406-644Uberlândia-MG
                </p>
        </div>
        <div className={styles.footerSocial}>
          <a href="link-para-facebook">
            <img src="https://www.institutoalgar.org.br/wp-content/uploads/2022/08/icon-social-facebook.svg" alt="Facebook" />
          </a>
          <a href="link-para-linkedin">
            <img src="https://www.institutoalgar.org.br/wp-content/uploads/2022/08/Group-4360.svg" alt="LinkedIn" />
          </a>
          <a href="link-para-instagram">
            <img src="https://www.institutoalgar.org.br/wp-content/uploads/2022/08/icon-instagram.svg" alt="Instagram" />
          </a>
          <a href="link-para-youtube">
            <img src="https://www.institutoalgar.org.br/wp-content/uploads/2022/08/icon-youtube.svg" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className={styles.footerRights}>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
