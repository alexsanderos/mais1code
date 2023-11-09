import styles from './index.module.scss';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>  { 
        toast("Wow so easy !");
        console.log(data)
    };

    return <>

    

       
<div id='container1' >
    <h1>Fale Com o Instituto.</h1>
        <p className='paragrafo'>
        Você pode tirar suas dúvidas e enviar sugestões.<br></br>
        Se esta é a primeira vez que você entra em contato conosco,<br></br>
        preencha o formulário de contato logo abaixo.
        </p>
</div>

<div id='principal'>

<h2>Fale conosco.</h2>

<form onSubmit ={ handleSubmit(onSubmit) } >

        <div  > 
            <input className='nome' type="text" name="nome" placeholder="Nome" 
                { ... register("nome", { required: true,maxLength: 255,minLength:3 })} />
                { errors.nome && errors.nome?.type == 'required' && <div className={styles.erro}> O nome é obrigatório!</div>}
                { errors.nome && errors.nome?.type == 'maxLength' && <div className={styles.erro}> O Tamanho maximo do campo não pode passar de 255 caracteres!</div>}
                { errors.nome && errors.nome?.type == 'minLength' && <div className={styles.erro}> O Tamanho minimo  3 caracteres!</div>}
        </div>  
    


        <div>
            <input  className='email' type="email" name="email" placeholder="E-mail"
            { ... register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })} />
                { errors.email &&
                errors.email?.type == 'required'
                && <div  className={styles.erro} > O E-mail é obrigatório!</div>}
            { errors.email &&
                errors.email?.type == 'pattern'
                && <div  className={styles.erro} > O E-mail é inválido!</div>}
        </div>

                    
                <div >
                    <input className='estado' type="text" name="estado" placeholder="Estado"
                    { ... register("estado", { required: true })} />
                { errors.estado && <div  className={styles.erro}> O estado é obrigatório!</div>}
                </div>




                <div >
                    <input className=' cidade' type="text" name="cidade" placeholder="Cidade"
                     { ... register("cidade", { required: true })} />
                     { errors.cidade && <div  className={styles.erro}> A cidade é obrigatório!</div>}
                </div>



                <div className='telas' >
                <div>
                <input className='telefone' type="tel" name="telefone" placeholder="Telefone" 
                 { ... register("telefone", { required: true })} />
                 { errors.telefone && <div  className={styles.erro}> O telefone é obrigatório!</div>}
                </div>


                <div>
                <textarea className='assunto' name="assunto" placeholder="Assunto" 
                 { ... register("assunto", { required: true, maxLength: 150 })} />
                 { errors.assunto && errors.assunto?.type == 'maxLength' && <div className={styles.erro}> O número máximo de caracteres é 150!
                 </div>}
                 { errors.assunto && errors.assunto?.type == 'required' && <div  className={styles.erro} > O assunto é obrigatório!</div>}
                 
                </div>

                </div>

                    <textarea className='mensagem' name="mensagem" placeholder="Mensagem"
                     { ... register("mensagem", { required: true, maxLength: 255 })} />
                     { errors.mensagem && errors.mensagem?.type == 'required' && <div  className={styles.erro}> A mensagem é obrigatória!</div>} 
                     { errors.mensagem && errors.mensagem?.type == 'maxLength' && <div className={styles.erro}> O Tamanho maximo da mensagem não pode passar de 255 caracteres!</div>}
               
                 <div>

            <button className='enviar' type="submit">Enviar</button>
        
                
        </div>
</form>
</div>

    </>
}