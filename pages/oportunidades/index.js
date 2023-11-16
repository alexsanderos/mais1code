import styles from './index.module.scss';

export default function Oportunidades() {
    return <>
    <div className={styles['lista-oportunidades']}>
     <h1> Lista Oportunidades </h1> 
     <table className={styles['tabela-oportunidades']}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Empresa</th>
                <th>Título</th>
                <th>Nível</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Empresa 1</td>
                <td>Desenvolvedor Front-end</td>
                <td>Júnior</td>
                <td><a href="#" > Editar </a>
<a href="#" > Excluir </a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Empresa 2</td>
                <td>Desenvolvedor Back-end</td>
                <td>Júnior</td>
                <td><a href="#" > Editar </a>
<a href="#" > Excluir </a></td>
            </tr>
        </tbody>
     </table>
    </div>
      
      </>;
}
