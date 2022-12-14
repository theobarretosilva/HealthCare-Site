import { Link } from "react-router-dom"
import { Div1Styled } from "../../components/Div1/Div1.styles"
import { Div3Styled } from "../../components/Div3/Div3.styles"
import { Headerbar } from "../../components/Headerbar/Headerbar"
import { PStyled, PSubStyled } from "../../components/Headerbar/Headerbar.styles"
import { ImagemInicio } from "../../components/ImagemInicio/ImagemInicio"
import { P2Styled } from "../../components/P2/P2.styles"
import { SubtituloStyled } from "../../components/Subtitulo/Subtitulo.styles"
import { ApresentacaoStyled, DivEquipeStyled, DivFotosEquipeStyled, DivFotosIndStyled, RodapeStyled, EquipeStyled, ImgEquipeStyled, PNomeEquipeStyled, PContatosStyled, DivContatos2Styled, ImgEmailStyled, PEmailStyled, DivBaixeAppStyled, ImgQrStyled, DivContatosStyled, LinkStyled } from "./TelaInicial.styles"

export const TelaInicial = () => {
    return(
        <>
            <Headerbar componentInicio={<PSubStyled>INÍCIO</PSubStyled>} componentBiotipo={<Link to={"/biotipos"} style={{ textDecoration: 'none' }}><PStyled>BIOTIPOS</PStyled></Link>}/>
            <ImagemInicio />
            <ApresentacaoStyled>APRESENTAÇÃO</ApresentacaoStyled>
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
            <DivEquipeStyled>
                <EquipeStyled>EQUIPE</EquipeStyled>
                <DivFotosEquipeStyled>
                    <DivFotosIndStyled>
                        <ImgEquipeStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/fotoIntegranteClarissa.png?raw=true" alt="Foto da integrante da equipe, Clarissa"/>
                        <PNomeEquipeStyled>Clarissa Assunção</PNomeEquipeStyled>
                    </DivFotosIndStyled>
                    <DivFotosIndStyled>
                        <ImgEquipeStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/fotoIntegranteEduarda.png?raw=true" alt="Foto da integrante da equipe, Eduarda"/>
                        <PNomeEquipeStyled>Eduarda Franderlinde</PNomeEquipeStyled>
                    </DivFotosIndStyled>
                    <DivFotosIndStyled>
                        <ImgEquipeStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/fotoIntegranteTheo.png?raw=true" alt="Foto do integrante da equipe, Théo"/>
                        <PNomeEquipeStyled>Théo Silva</PNomeEquipeStyled>
                    </DivFotosIndStyled>
                </DivFotosEquipeStyled>
            </DivEquipeStyled>
            <RodapeStyled>
                <DivContatosStyled>
                    <PContatosStyled>Contato:</PContatosStyled>
                    <DivContatos2Styled>
                        <ImgEmailStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/mail.png?raw=true" alt="Ícone de email"/>
                        <PEmailStyled>apphealthcare1@gmail.com</PEmailStyled>
                    </DivContatos2Styled>
                </DivContatosStyled>
                <DivBaixeAppStyled>
                    <PContatosStyled>Conheça nosso projeto:</PContatosStyled>
                    <ImgQrStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/qrCodeGithub.png?raw=true" alt="QRCode para ir ao GitHub do aplicativo"/>
                    <LinkStyled href="https://github.com/theobarretosilva/HealthCare" target='_blank'>Projeto HealthCare</LinkStyled>
                </DivBaixeAppStyled>
            </RodapeStyled>
        </>
    );
};