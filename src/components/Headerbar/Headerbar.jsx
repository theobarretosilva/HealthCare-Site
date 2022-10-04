import { BiotiposStyled, HeaderSyled, LogoStyled } from "./Headerbar.styles"

export const Headerbar = () => {
    return(
        <HeaderSyled>
            <LogoStyled src="../../src/assets/imgs/logoNome.png"/>
            <BiotiposStyled>Biotipos corporais</BiotiposStyled>
        </HeaderSyled>
    );
};