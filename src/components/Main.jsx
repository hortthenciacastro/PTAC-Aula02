import { useState } from "react";

export default function Main(){
    const[nome, setNome] = useState("");
    const[telefone, setTelefone] = useState("");
    
    return(
        <main>
            <form>
                <label> nome
            <input
            type="text"
            name="nome-contato"
            id="nome"
            onChange={(event)=> setNome(event.target.value)}
            />
            </label>
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
            </form>
        </main>
    )
}