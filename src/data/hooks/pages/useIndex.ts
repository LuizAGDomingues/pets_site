import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex(){
    const [listaPets, setListaPets] = useState<Pet[]>([]),
        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [valor, setValor] = useState(''),
        [mensagem, setMensagem] = useState('');
    useEffect(() => {
        ApiService.get('/pets').then(response => {
            setListaPets(response.data);
        });
    }, [])
    
    function adotar(){
        if(petSelecionado !== null){
            if(validarDados()){
                ApiService.post('/adocoes', {
                    pet_id: petSelecionado.id,
                    email,
                    valor
                }).then(response => {
                    setPetSelecionado(null);
                    setMensagem('Pet adotado com sucesso!');
                    limparFormulario();
                }).catch((error: AxiosError) => {
                    setMensagem(error.response?.data.message);
                });
            } else {
                setMensagem('Preencha todos os campos');
            }
        }
    }

    function validarDados(){
        return email.length > 0 && valor.length > 0;
    }

    function limparFormulario(){
        setEmail('');
        setValor('');
    }

    return{
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    };
}