import { Link, Box } from "@mui/material";
import NextLink from "next/link";
import { CabecalhoContainer, Logo, LinksContainer } from "./CabecalhoAdmin.style"

export default function CabecalhoAdmin(){
    return(
        <CabecalhoContainer>
            <div>
                <Logo src="/imagens/logo.svg" alt="Logo Adote um Pet" />
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}><a>Cadastrar pet</a></Link>
                    <Link component={NextLink} href={'/pets/relatorio'}><a>Realtorio <Box component={'span'} sx={{display:{sm:'initial', xs:'none'}}}>de adocao</Box></a></Link>
                </LinksContainer>
            </div>
        </CabecalhoContainer>
    )
}