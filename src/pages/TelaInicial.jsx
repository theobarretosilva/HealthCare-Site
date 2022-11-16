import { Link } from "react-router-dom"
import { Headerbar } from "../components/Headerbar/Headerbar"
import { PStyled, PSubStyled } from "../components/Headerbar/Headerbar.styles"
import { ImagemInicio } from "../components/ImagemInicio/ImagemInicio"

export const TelaInicial = () => {
    return(
        <>
            <Headerbar componentInicio={<PSubStyled>INÍCIO</PSubStyled>} componentBiotipo={<PStyled>BIOTIPOS</PStyled>}/>
            <ImagemInicio />
            <Link to={"/biotipos"}>Ir tela de biotipos</Link>
        </>
    ) 
}