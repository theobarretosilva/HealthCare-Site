import * as S from './TituloBase.styles'
import React from 'react'

export const TituloBase = ({ children, ...props }) => {
    return <S.TituloBase {...props} >{children}</S.TituloBase>
}