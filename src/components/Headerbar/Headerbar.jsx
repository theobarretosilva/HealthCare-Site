import { PStyled, HeaderSyled, LogoStyled, DivNavStyled } from "./Headerbar.styles"
import PropTypes from "prop-types"

export const Headerbar = ({ componentInicio, componentBiotipo }) => {
    return(
        <HeaderSyled>
            <LogoStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/logoNome.png?raw=true"/>
            <DivNavStyled>
                {componentInicio}
                <PStyled href="#sobre">SOBRE</PStyled>
                <PStyled href="#equipe">EQUIPE</PStyled>
                {componentBiotipo}
            </DivNavStyled>
        </HeaderSyled>
    );
};

Headerbar.propTypes = {
    componentInicio: PropTypes.node.isRequired,
    componentBiotipo: PropTypes.node.isRequired,
};