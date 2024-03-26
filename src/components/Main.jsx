import { useState } from "react";

export default function Main(){
    const[nome, setNome] = useState("");
    const[telefone, setTelefone] = useState("");
      const[listaContatos, setListaContatos] = useState([])
      const registrar = (event) => {

        event.preventDefault();
 setListaContatos([...listaContatos,
    {
       nomeSalvo: nome,
       telefoneSalvo: telefone
    }
]);
};

console.table(listaContatos)
    
    return(
        <main>
            <form action="">
                <label htmlFor="nome">Nome:</label>
            <input
            type="text"
            name="nome-contato"
            id="nome"
            onChange={(event)=> setNome(event.target.value)}
            />
            </form>
            {nome}

           <label> telefone
            <input
            type="tel"
            name="telefone-contato"
            id="telefone"
            onChange={(event)=> setTelefone(event.target.value)}
            />
            </label>
            {telefone}
            <button> Enviar </button>
            </main>
    );
}