import { Link } from "react-router-dom"

export const TelaInicial = () => {
    return(
        <>
            <h1>Tela inicial</h1>
            <Link to={"/biotipos"}>Ir tela de biotipos</Link>
        </>
    ) 
}