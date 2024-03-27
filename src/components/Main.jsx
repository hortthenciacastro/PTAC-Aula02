import { useState } from "react";

export default function Main(){
    const[nome, setNome] = useState("");
    const[telefone, setTelefone] = useState("");
      const[listaContatos, setListaContatos] = useState([])

      const registrar = (event) => {
        event.preventDefault();
        alert ("Deu certo!");
        setListaContatos([...listaContatos,
            {
        nomeSalvo: nome,
        telefoneSalvo: telefone
       }
     ]);
};
console.table(listaContatos);
    return(
        <main>
            <form onSubmit={registrar}>
                <label htmlFor="nome">Nome:</label>
            <input
            type="text"
            name="nome-contato"
            id="nome"
            value={nome}
            onChange={(event)=> setNome(event.target.value)}
            />
            </form>
           

           <label> telefone
            <input
            type="tel"
            name="telefone-contato"
            id="telefone"
            onChange={(event)=> setTelefone(event.target.value)}
            />
            </label>
        
            <button> Enviar </button>
            </main>
    );
}