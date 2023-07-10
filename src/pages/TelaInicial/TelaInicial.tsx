import { Div1Styled } from "../../components/Div1/Div1.styles"
import { Div3Styled } from "../../components/Div3/Div3.styles"
import { Header } from "../../components/Header/Header"
import { ImgHC } from "../../components/ImgHC/ImgHC"
import { P2Styled } from "../../components/P2/P2.styles"
import { SubtituloStyled } from "../../components/Subtitulo/Subtitulo.styles"
import * as S from "./TelaInicial.styles"
import React from "react"

export const TelaInicial = () => {
    return(
        <>
            <Header />
            <ImgHC />
            <section>
                <S.H1Apres>APRESENTAÇÃO</S.H1Apres>
                <Div1Styled>
                    <Div3Styled>
                        <SubtituloStyled>Sobre o Aplicativo</SubtituloStyled>
                        <P2Styled>
                            O projeto HealthCare tem como objetivo o monitoramento da saúde por meio de um aplicativo que conta com um sistema
                            de controle que dispõem de recursos como, monitoramentos do consumo de água e sono, contagem de passos, cálculo do
                            IMC, assim como, armazenamento e cálculo de calorias consumida por refeição e acesso a uma agenda de vacinas.
                        </P2Styled>
                    </Div3Styled>
                    <Div3Styled>
                        <SubtituloStyled>Funcionalidades</SubtituloStyled>
                        <P2Styled>
                        Além da funcionalidades citadas acima, para tornar a experiência ainda melhor contamos com um pacote premium, com
                        funções que podem encaminhar o paciente para clínicas conforme sua necessidade, acessar seus resultados de exames
                        sem sair de casa, além de convênios especiais com as clínicas parceiras.
                        </P2Styled>
                    </Div3Styled>
                </Div1Styled>
            </section>
            <S.DivEquipeStyled>
                <S.EquipeStyled>EQUIPE</S.EquipeStyled>
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
            </S.DivEquipeStyled>
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