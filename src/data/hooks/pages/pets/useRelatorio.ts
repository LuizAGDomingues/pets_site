import { useState, useEffect } from "react";
import { Relatorio } from "../../../@types/Relatorio";
import { ApiService } from "../../../services/ApiService";

export function useRelatorio(){
    const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);

    useEffect(() => {
        ApiService.get('/adocoes')
        .then(response => {
            setListaRelatorio(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    return {
        listaRelatorio
    }
}