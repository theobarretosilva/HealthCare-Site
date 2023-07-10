import { TextoBase } from "../TextoBase/TextoBase.styles"
import { SubtituloStyled } from "../Subtitulo/Subtitulo.styles"
import { DivGeralStyled, DivTesteIndividualStyled, ImgTesteStyled } from "./TesteBiotipo.styles"

export const TesteBiotipo = () => {
    return(
        <DivGeralStyled>
            <DivTesteIndividualStyled>
                <SubtituloStyled>Endomorfo</SubtituloStyled>
                <TextoBase>Não consegue tocar os<br />dedos</TextoBase>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeEndomorfo.png?raw=true"/>
            </DivTesteIndividualStyled>
            <DivTesteIndividualStyled>
                <SubtituloStyled>Mesomorfo</SubtituloStyled>
                <TextoBase>Encontra a ponta dos<br />dedos</TextoBase>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeMesomorfo.png?raw=true"/>
            </DivTesteIndividualStyled>
            <DivTesteIndividualStyled>
                <SubtituloStyled>Ectomorfo</SubtituloStyled>
                <TextoBase>Sobreposição de um<br />dedo no outro</TextoBase>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeEctomorfo.png?raw=true"/>
            </DivTesteIndividualStyled>
        </DivGeralStyled>
    )
}