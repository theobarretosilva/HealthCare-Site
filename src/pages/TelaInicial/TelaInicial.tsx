import { DivCentralizadora } from "../../components/DivCentralizadora/DivCentralizadora.styles"
import { SubDiv } from "../../components/SubDiv/SubDiv.styles"
import { ImgHC } from "../../components/ImgHC/ImgHC"
import { TextoBase } from "../../components/TextoBase/TextoBase.styles"
import { TituloInicial } from "../../components/TituloInicial/TituloInicial.styles"
import { TituloBase } from "../../components/TituloBase/TituloBase"
import * as S from "./TelaInicial.styles"
import React from "react"

export const TelaInicial = () => {
    return(
        <>
            <ImgHC />
            <section>
                <TituloBase>APRESENTAÇÃO</TituloBase>
                <DivCentralizadora>
                    <SubDiv>
                        <TituloInicial>Sobre o Aplicativo</TituloInicial>
                        <TextoBase>
                            O projeto HealthCare tem como objetivo o monitoramento da saúde por meio de um aplicativo que conta com um sistema
                            de controle que dispõem de recursos como, monitoramentos do consumo de água e sono, contagem de passos, cálculo do
                            IMC, assim como, armazenamento e cálculo de calorias consumida por refeição e acesso a uma agenda de vacinas.
                        </TextoBase>
                    </SubDiv>
                    <SubDiv>
                        <TituloInicial>Funcionalidades</TituloInicial>
                        <TextoBase>
                            Além da funcionalidades citadas acima, para tornar a experiência ainda melhor contamos com um pacote premium, com
                            funções que podem encaminhar o paciente para clínicas conforme sua necessidade, acessar seus resultados de exames
                            sem sair de casa, além de convênios especiais com as clínicas parceiras.
                        </TextoBase>
                    </SubDiv>
                </DivCentralizadora>
            </section>
            <S.SectionEquipe>
                <TituloBase style={{ color: 'white' }}>EQUIPE</TituloBase>
                <S.DivFotosEquipeStyled>
                    <S.DivFotosIndStyled>
                        <S.ImgEquipeStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/fotoIntegranteClarissa.png?raw=true" alt="Foto da integrante da equipe, Clarissa"/>
                        <S.PNomeEquipeStyled>Clarissa Assunção</S.PNomeEquipeStyled>
                    </S.DivFotosIndStyled>
                    <S.DivFotosIndStyled>
                        <S.ImgEquipeStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/fotoIntegranteEduarda.png?raw=true" alt="Foto da integrante da equipe, Eduarda"/>
                        <S.PNomeEquipeStyled>Eduarda Franderlinde</S.PNomeEquipeStyled>
                    </S.DivFotosIndStyled>
                    <S.DivFotosIndStyled>
                        <S.ImgEquipeStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/fotoIntegranteTheo.png?raw=true" alt="Foto do integrante da equipe, Théo"/>
                        <S.PNomeEquipeStyled>Théo Silva</S.PNomeEquipeStyled>
                    </S.DivFotosIndStyled>
                </S.DivFotosEquipeStyled>
            </S.SectionEquipe>
        </>
    );
};