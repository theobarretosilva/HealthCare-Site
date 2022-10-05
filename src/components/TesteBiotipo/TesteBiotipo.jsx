import { P2Styled } from "../P2/P2.styles"
import { SubtituloStyled } from "../Subtitulo/Subtitulo.styles"
import { DivGeralStyled, DivTesteIndividualStyled, ImgTesteStyled } from "./TesteBiotipo.styles"

export const TesteBiotipo = () => {
    return(
        <DivGeralStyled>
            <DivTesteIndividualStyled>
                <P2Styled>Não consegue tocar os<br />dedos</P2Styled>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeEndomorfo.png?raw=true"/>
                <SubtituloStyled>Endomorfo</SubtituloStyled>
            </DivTesteIndividualStyled>
            <DivTesteIndividualStyled>
                <P2Styled>Encontra a ponta dos<br />dedos</P2Styled>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeMesomorfo.png?raw=true"/>
                <SubtituloStyled>Mesomorfo</SubtituloStyled>
            </DivTesteIndividualStyled>
            <DivTesteIndividualStyled>
                <P2Styled>Sobreposição de um<br />dedo no outro</P2Styled>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeEctomorfo.png?raw=true"/>
                <SubtituloStyled>Ectomorfo</SubtituloStyled>
            </DivTesteIndividualStyled>
        </DivGeralStyled>
    )
}