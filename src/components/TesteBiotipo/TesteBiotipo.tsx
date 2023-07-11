import { TextoBase } from "../TextoBase/TextoBase.styles"
import { SubtituloStyled } from "../Subtitulo/Subtitulo.styles"
import { DivGeralStyled, DivTesteIndividualStyled, ImgTesteStyled } from "./TesteBiotipo.styles"
import React from "react"

export const TesteBiotipo = () => {
    return(
        <DivGeralStyled>
            <DivTesteIndividualStyled>
                <SubtituloStyled>Endomorfo</SubtituloStyled>
                <TextoBase style={{ color: 'white' }}>Não consegue tocar os<br />dedos</TextoBase>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeEndomorfo.png?raw=true"/>
            </DivTesteIndividualStyled>
            <DivTesteIndividualStyled>
                <SubtituloStyled>Mesomorfo</SubtituloStyled>
                <TextoBase style={{ color: 'white' }}>Encontra a ponta dos<br />dedos</TextoBase>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeMesomorfo.png?raw=true"/>
            </DivTesteIndividualStyled>
            <DivTesteIndividualStyled>
                <SubtituloStyled>Ectomorfo</SubtituloStyled>
                <TextoBase style={{ color: 'white' }}>Sobreposição de um<br />dedo no outro</TextoBase>
                <ImgTesteStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/testeEctomorfo.png?raw=true"/>
            </DivTesteIndividualStyled>
        </DivGeralStyled>
    )
}