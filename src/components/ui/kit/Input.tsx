import React from 'react';
import styled from '@emotion/styled';

interface IProps {
    disabled?: boolean;
    placeholder?: string;
    type?: string,
    label?:string,
    rest?: any
}

export const Input: React.FC<IProps> = ({
    disabled = false,
    placeholder,
    type = 'text',
    label,
    ...rest
}) => {
    return (
        <StyledContainer>
            <label>{label}</label>
            <input disabled={disabled} placeholder={placeholder} type={type} {...rest} />
        </StyledContainer>
    )
}

type TProps = {
    theme?: any
}

const StyledContainer = styled.div<TProps>`
display:flex;
flex-direction:column;
input{
    height:45px;
    width:100%;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 5px;
    background-color:transparent;
    font-family: Arimo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    padding:0 12px;
    color:${props =>props.theme.colors.inputtext};
    &:focus{
        outline:none;
    }
}
label{
    margin:15px 0 8px;
    font-family: Arimo;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    opacity: 0.5;
    }
`

