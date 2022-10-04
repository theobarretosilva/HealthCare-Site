import './App.css'
import { Div1Styled } from './components/Div1/Div1.styles';
import { Div2Styled } from './components/Div2/Div2.styles';
import { Div3Styled } from './components/Div3/Div3.styles';
import { Headerbar } from './components/Headerbar/Headerbar'
import { ImgStyled } from './components/Imagens/Imagens.styles';
import { P1Styled } from './components/P1/P1.styles';
import { P2Styled } from './components/P2/P2.styles';
import { SubtituloStyled } from './components/Subtitulo/Subtitulo.styles';
import { TituloStyled } from './components/TituloInicial/TituloInicial.styles';

function App() {
  return (
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
            <br />
            Além disso, as mulheres apresentam quadril mais estreito e seios com  pouco músculo e pouca gordura.
          </P2Styled>
          <Div2Styled>
            <ImgStyled src='../../src/assets/imgs/ectomorfo.png'/>
          </Div2Styled>
          <P2Styled>
            Além de apresentar um metabolismo mais rápido e, por isso, são capazes de perder peso mais facilmente, mas têm mais
            <br />
            dificuldade para ganhar massa muscular.
          </P2Styled>
        </Div3Styled>
        <Div3Styled>
          <SubtituloStyled>Endomorfo</SubtituloStyled>
          <P2Styled>
            As pessoas com biotipo corporal endomorfo apresentam baixa estatura, corpo mais arredondado e mais largo, de forma
            <br />
            que as mulheres com esse biotipo apresentam quadril mais largo, associado ao formato de uma pera, e maior quantidade
            <br />
            de gordura acumulada.
          </P2Styled>
          <Div2Styled>
            <ImgStyled src='../../src/assets/imgs/endomorfo.png'/>
          </Div2Styled>
          <P2Styled>
            Além de apresentarem metabolismo mais lento, maior acúmulo de gordura e têm mais dificuldade para perder peso,
            <br />
            apesar de maior facilidade para ganhar massa muscular.
          </P2Styled>
        </Div3Styled>
      </Div1Styled>
    </>
  );
};

export default App;