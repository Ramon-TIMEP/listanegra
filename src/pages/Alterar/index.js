import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import ListaNegraApi from "../../services/listaNegraApi";
import { useHistory } from 'react-router-dom';
const api = new ListaNegraApi();


export default function Alterar(props) {
    const navegacao = useHistory();
    
    const [id, setId] = useState(props.location.state.id)
    const [nome, setNome] = useState(props.location.state.nome)
    const [motivo, setMotivo] = useState(props.location.state.motivo)
    const [inclusao, setInclusao] = useState(props.location.state.inclusao.substr(0, 10))
    const [local, setLocal] = useState(props.location.state.local)

    const alterarClick = async () => {
        const request = {
            nome,
            motivo,
            local,
            inclusao
        };
        
        console.log(request)
        const resp = await api.alterar(id, request);

        toast.dark('🚀 Alterado na lista negra');

        navegacao.goBack();
    }
    
    return (
        <div>
            <h1>Alterar na Lista Negra</h1>

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
                <label>Local:</label>
                <select
                   value={local}
                   onChange={e => setLocal(e.target.value)} >
                    
                    <option value="Família">Família</option>
                    <option value="Escola">Escola</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Outro">Outro</option>
                </select>
                  
            </div>

            <div>
                <label>Inclusão:</label>
                <input type="date" 
                   value={inclusao}
                   onChange={e => setInclusao(e.target.value)}
                  />
            </div>

            <div>
                <button onClick={alterarClick}> Alterar </button>
            </div>

            <ToastContainer />
        </div>
    )
}