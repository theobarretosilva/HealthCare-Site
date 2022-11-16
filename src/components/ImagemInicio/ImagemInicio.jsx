import { DivImgStyled, ImagemStyled, NomeLogoStyled } from "./ImagemInicio.styles";

export const ImagemInicio = () => {
    return(
        <DivImgStyled>
            <ImagemStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/imagemInicial.png?raw=true" alt="Imagem de pessoas rindo e conversando"/>
            <NomeLogoStyled>HEALTHCARE</NomeLogoStyled>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum debitis repudiandae magni obcaecati, dolor, voluptatum molestiae inventore odit dolore minima perferendis, vero at nostrum aliquid. A autem magnam fugiat praesentium repudiandae corporis repellat optio vitae blanditiis sequi exercitationem voluptate in iste tempore, quia aliquam asperiores voluptatibus voluptatum earum officia odit?</h1>
        </DivImgStyled>
    );
};