import { BiotiposStyled, HeaderSyled, LogoStyled } from "./Headerbar.styles"

export const Headerbar = () => {
    return(
        <HeaderSyled>
            <LogoStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/logoNome.png?raw=true"/>
            <BiotiposStyled>Biotipos corporais</BiotiposStyled>
        </HeaderSyled>
    );
};