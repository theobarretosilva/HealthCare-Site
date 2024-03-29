import React, { useEffect, useState } from 'react';
import * as S from './Header.styles'
import { useLocation } from 'react-router';

export const Header = () => {
    const [underline, setUnderline] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == "/") {
            setUnderline(true);
        }
        if (location.pathname == "/biotipos") {
            setUnderline(false)
        }
    }, [location.pathname])

    return(
        <S.HeaderSyled>
            <S.LogoStyled src="https://github.com/theobarretosilva/HealthCare-Site/blob/master/src/assets/imgs/logoNome.png?raw=true"/>
            <S.UlLink>
                <li>
                    <S.NavLinkStyled style={{ textDecoration: `${!underline ? 'none' : 'underline'}` }} to={'/'}>INÍCIO</S.NavLinkStyled>
                </li>
                <li>
                    <S.NavLinkStyled style={{ textDecoration: `${underline ? 'none' : 'underline'}` }} to={'/biotipos'}>BIOTIPOS</S.NavLinkStyled>
                </li>
            </S.UlLink>
        </S.HeaderSyled>
    );
};