import * as S from './Footer.styles'
import React from 'react'

export const Footer = () => {
    return(
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
    )
}