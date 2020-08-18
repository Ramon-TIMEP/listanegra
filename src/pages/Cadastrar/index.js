import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import ListaNegraApi from "../../services/listaNegraApi";
const api = new ListaNegraApi();


export default function Cadastrar() {
    const [nome, setNome] = useState('')
    const [motivo, setMotivo] = useState('')

    const salvarClick = async () => {
        const resp = await
            api.cadastrar({
                nome: nome,
                motivo: motivo
            });

        toast.dark('🚀 Cadastrado na lista negra');
    }
    
    return (
        <div>
            <h1>Cadastrar na Lista Negra</h1>

            <div>
                <label>Nome:</label>
                <input type="text" 
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                 />
            </div>

            <div>
                <label>Motivo:</label>
                <input type="text" 
                   value={motivo}
                   onChange={e => setMotivo(e.target.value)}
                  />
            </div>

            <div>
                <button onClick={salvarClick}> Cadastrar </button>
            </div>

            <ToastContainer />
        </div>
    )
}