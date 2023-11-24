import styles from './index.module.scss';

export default function Oportunidades(){
    return <>
        <div className={styles['quadrado-corpo']}>
            <h1 className={styles['descricao']}> Formulário de descrição da vaga</h1>
            <div className={styles['campos']}>
                <label className={styles['nome-box']}>Empresa
                </label>
                <input className={styles['box']} type="text"id="empresa"/>  
            </div>    
            <div className={styles['campos']}> 
                <label className={styles['nome-box']}>Título
                </label>
                <input className={styles['box']} type="text"id="titulo"/> 
            </div>
            <div className={styles['campos']}>
                <label className={styles['nome-box']}>Nível
                </label>
                <input className={styles['box']} type="text"id="nivel"/> 
            </div>
            <div className={styles['campos']}>
                <label className={styles['nome-box']}>Faixa salarial de
                </label>
                <input className={styles['box']} type="text"id="faixa salarial de"/> 
            </div>
            <div className={styles['campos']}>
                <label className={styles['nome-box']}>Faixa salarial até
                </label>
                <input className={styles['box']} type="text"id="faixa salarial até" />
            </div>
            <div className={styles['campos']}>
                <label className={styles['nome-box']}>Regime
                </label>
                <input className={styles['box']} type="text"id="regime"/> 
            </div>
            <button className='enviar' type="submit">Enviar</button>
        </div>  
    </>
}
