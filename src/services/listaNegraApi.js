import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export default class ListaNegraApi {


    async cadastrar(ln) {
       
       let formData = new FormData();
       

        formData.append('nome', ln.nome);
        formData.append('motivo', ln.motivo);
        formData.append('local', ln.local);
        formData.append('inclusao', ln.inclusao);
        formData.append('foto', ln.foto);

        const resp = await api.post('lista negra', formData, {
            headers: {'content-type': 'multipart/form-data'}
        });

        return resp;
        

    }

    async consultar() {
        const resp = await api.get('/listanegra');
        
        return resp.data;
    }

    buscarImagem(foto){
        const urlFoto = api.defaults.baseURL + '/listranegra/foto' + foto;

        return urlFoto;
    }

    async deletar(id){
        const resp = await api.delete('/listanegra/${id}');

        return resp.data;
    }

    async alterar(id, ln){
        const resp = await api.alterar('listanegra/${id}', ln);

        return resp.data;
    }
}