import './index.module.scss'

export default function Contato() {
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

<form >

        <div  > 
            <input className='nome' type="text" name="nome" placeholder="Nome" required minlength="3">
            </input>
        </div>  
    


        <div>
            <input  className='email' type="email" name="email" placeholder="E-mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            </input>
        </div>



        
                <div >
                    <input className='estado' type="text" name="estado" placeholder="Estado">
                    </input>
                </div>




                <div >
                    <input className=' cidade' type="text" name="cidade" placeholder="Cidade">
                    </input>
                </div>



                <div className='telas' >
                <div>
                <input className='telefone' type="tel" name="telefone" placeholder="Telefone" required pattern="\d{11}"></input>
                </div>


                <div>
                <textarea className='assunto' name="assunto" placeholder="Assunto" required maxlength="150">
                </textarea>
                </div>

                </div>


                    <textarea className='mensagem' name="mensagem" placeholder="Mensagem" required maxlength="255">        
                  </textarea> 
               
        


        <div>

            <button className='enviar' type="submit">Enviar</button>
        
                <p className='p-rodape' >
                    Tel 1: (34) 99670-5729 <br></br>
                    Tel 2: (34) 3218-3061 <br></br>
                    Email: contato@institutoalgar.org.br <br></br>
                    End: Rua Lapa do Lobo, 800 <br></br>
                    Bairro Granja Marileusa <br></br>
                    Cep: 38406-644Uberlândia-MG
                </p>
        </div>
</form>
</div>

    </>
}