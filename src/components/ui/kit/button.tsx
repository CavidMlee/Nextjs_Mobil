import React from "react";
import styled from '@emotion/styled'

interface IProps {
    disabled?: boolean;
    onClick?: () => void;
    title:string
}

export const Button: React.FC<IProps> = ({
    disabled = false,
    onClick,
    title
}) => {
    return (
        <StyledButton disabled={disabled} onClick={onClick}>
            <span className='buttonTitle'>{title}</span>
        </StyledButton>
    );
};

type TProps={
    theme?:any
}

const StyledButton = styled.button<TProps>`
    border: none;
    background-color: ${props => props.theme.colors.primaryColor};
    border-radius: 5px;
    padding:0 30px;
    height:45px;
    width:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    &:focus{
        outline:none;
    }
    .buttonTitle{
        color:${props => props.theme.colors.buttonText};
        font-family: Arimo;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
    }
` 