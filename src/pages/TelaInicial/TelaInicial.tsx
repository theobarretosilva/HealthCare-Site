import { DivCentralizadora } from "../../components/DivCentralizadora/DivCentralizadora.styles"
import { SubDiv } from "../../components/SubDiv/SubDiv.styles"
import { Header } from "../../components/Header/Header"
import { ImgHC } from "../../components/ImgHC/ImgHC"
import { TextoBase } from "../../components/TextoBase/TextoBase.styles"
import * as S from "./TelaInicial.styles"
import React from "react"
import { TituloInicial } from "../../components/TituloInicial/TituloInicial.styles"

export const TelaInicial = () => {
    return(
        <>
            <Header />
            <ImgHC />
            <section>
                <S.H1Apres color="primary">APRESENTAÇÃO</S.H1Apres>
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
                <S.H1Apres style={{ color: 'white' }}>EQUIPE</S.H1Apres>
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
            <S.RodapeStyled>
                <S.DivContatosStyled>
                    <S.PContatosStyled>Contato:</S.PContatosStyled>
                    <S.DivContatos2Styled>
                        <S.ImgEmailStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/mail.png?raw=true" alt="Ícone de email"/>
                        <S.PEmailStyled>apphealthcare1@gmail.com</S.PEmailStyled>
                    </S.DivContatos2Styled>
                </S.DivContatosStyled>
                <S.DivBaixeAppStyled>
                    <S.PContatosStyled>Conheça nosso projeto:</S.PContatosStyled>
                    <S.ImgQrStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/qrCodeGithub.png?raw=true" alt="QRCode para ir ao GitHub do aplicativo"/>
                    <S.LinkStyled href="https://github.com/theobarretosilva/HealthCare" target='_blank'>Projeto HealthCare</S.LinkStyled>
                </S.DivBaixeAppStyled>
            </S.RodapeStyled>
        </>
    );
};