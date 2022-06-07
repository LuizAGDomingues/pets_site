import { Button } from '@mui/material';
import {
    ListaStyled,
    ItemLista,
    Foto,
    Infos,
    Name,
    Description
} from './Lista.style';
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService'

interface ListaProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps) {
    const tamanhoMaximoTexto = 200;

    return(
        <ListaStyled>
            {props.pets.map(pet => (
                <ItemLista key={pet.id}>
                    <Foto src={pet.foto} alt={pet.name}/>
                    <Infos>
                        <Name>{pet.name}</Name>
                        <Description>
                            {TextService.limitarTexto(pet.history, tamanhoMaximoTexto)}
                        </Description>
                        <Button variant={'contained'} fullWidth onClick={() => props.onSelect(pet)}>Adotar {pet.name}</Button>
                    </Infos>
                </ItemLista>
            ))}
        </ListaStyled>
    )
}