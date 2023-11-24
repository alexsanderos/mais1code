import styles from './index.module.scss';

export default function Oportunidades() {
    return <>
    <div className={styles['lista-oportunidades']}>
     <div className={styles['cabecalho']}>
        <h1> Lista Oportunidades </h1>
        <a href="/formulario" className={styles['botao']} >Nova oportunidade</a>
     </div>
     <table className={styles['tabela-oportunidades']}>
        <thead>
            <tr>
                <th className={styles['linha-1']}>Id</th>
                <th>Empresa</th>
                <th>Título</th>
                <th>Nível</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className={styles['linha-1']}>1</td>
                <td>Empresa 1</td>
                <td>Desenvolvedor Front-end</td>
                <td>Júnior</td>
                <td><a href="#" > Editar </a> &nbsp;&nbsp;&nbsp;
                <a href="#" > Excluir </a></td>
            </tr>
            <tr>
                <td className={styles['linha-1']}>2</td>
                <td>Empresa 2</td>
                <td>Desenvolvedor Back-end</td>
                <td>Júnior</td>
                <td><a href="#" > Editar </a>&nbsp;&nbsp;&nbsp;
                <a href="#" > Excluir </a></td>
            </tr>
            <tr>
                <td className={styles['linha-branco']}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
     </table>
    </div>
      
      </>;
}
