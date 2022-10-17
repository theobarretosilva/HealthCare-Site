import { Div1Styled } from '../components/Div1/Div1.styles';
import { Div2Styled } from '../components/Div2/Div2.styles';
import { Div3Styled } from '../components/Div3/Div3.styles';
import { Headerbar } from '../components/Headerbar/Headerbar'
import { ImgStyled } from '../components/Imagens/Imagens.styles';
import { P1Styled } from '../components/P1/P1.styles';
import { P2Styled } from '../components/P2/P2.styles';
import { SubtituloStyled } from '../components/Subtitulo/Subtitulo.styles';
import { TesteBiotipo } from '../components/TesteBiotipo/TesteBiotipo';
import { TituloStyled } from '../components/TituloInicial/TituloInicial.styles';

export const TelaBiotipos = () => {
    return(
        <>
        <Headerbar />
        <Div1Styled>
            <TituloStyled>Tipos de biotipos</TituloStyled>
            <P1Styled>Os biotipos corporais podem ser classificados de acordo com as suas características. Os principais biotipos são:<br />ectomorfo, endomorfo e mesomorfo.</P1Styled>
            <P1Styled>Abaixo você encontrará dicas para descobrir o seu.</P1Styled>
            <hr />
            <Div3Styled>
            <SubtituloStyled>Ectomorfo</SubtituloStyled>
            <P2Styled>
                As pessoas com o biotipo corporal ectomorfo apresentam corpo mais magro e esguio, ombros estreitos e membros compridos. 
                Além disso, as mulheres apresentam quadril mais estreito e seios com  pouco músculo e pouca gordura.
            </P2Styled>
            <Div2Styled>
                <ImgStyled src='https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/ectomorfo.png?raw=true'/>
            </Div2Styled>
            <P2Styled>
                Além de apresentar um metabolismo mais rápido e, por isso, são capazes de perder peso mais facilmente, mas têm mais
                dificuldade para ganhar massa muscular.
            </P2Styled>
            </Div3Styled>
            <Div3Styled>
            <SubtituloStyled>Endomorfo</SubtituloStyled>
            <P2Styled>
                As pessoas com biotipo corporal endomorfo apresentam baixa estatura, corpo mais arredondado e mais largo, de forma
                que as mulheres com esse biotipo apresentam quadril mais largo, associado ao formato de uma pera, e maior quantidade
                de gordura acumulada.
            </P2Styled>
            <Div2Styled>
                <ImgStyled src='https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/endomorfo.png?raw=true'/>
            </Div2Styled>
            <P2Styled>
                Além de apresentarem metabolismo mais lento, maior acúmulo de gordura e têm mais dificuldade para perder peso,
                apesar de maior facilidade para ganhar massa muscular.
            </P2Styled>
            </Div3Styled>
            <Div3Styled>
            <SubtituloStyled>Mesomorfo</SubtituloStyled>
            <P2Styled>
                As pessoas com biotipo corporal mesomorfo possuem o corpo magro e musculoso, mesmo que não pratiquem atividade
                física com frequência. Além disso, as pessoas com esse biotipo possuem o tronco mais desenvolvido, pouca gordura
                abdominal, cintura mais fina e metabolismo mais rápido, além de ganhar massa muscular com facilidade.
            </P2Styled>
            <Div2Styled>
                <ImgStyled src='https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/mesomorfo.png?raw=true'/>
            </Div2Styled>
            <P2Styled>
                A pessoa com características mesomórficas, também pode ganhar gordura corporal. Por isso, o consumo de açúcar refinado,
                de alimentos industrializados, e alimentos gordurosos.
            </P2Styled>
            </Div3Styled>
            <br />
            <Div3Styled>
            <SubtituloStyled>Teste</SubtituloStyled>
            <P2Styled>
                Se mesmo assim você não conseguir identificar, é possível fazer um teste rápido que consiste em abraçar o pulso com o dedo médio
                e o polegar. Assim como na imagem abaixo:
            </P2Styled>
            </Div3Styled>
            <TesteBiotipo />
            <P2Styled>Importante: esse teste não é oficial, mas pode te ajudar a ter uma noção do seu biotipo.</P2Styled>
        </Div1Styled>
        </>
    )
}