import React from 'react';
import styled from '@emotion/styled';


type TProps = { 
    disabled?: boolean;
    placeholder?: string;
    type?: string,
    label?:string,
    [rest:string]: any;
};
type Ref = HTMLInputElement;

export const Input= React.forwardRef<Ref, TProps>((props, ref) => {
    const {
        disabled = false,
        placeholder,
        type = 'text',
        label,
        ...rest
    } = props
    return (
        <StyledContainer>
            <label>{label}</label>
            <input disabled={disabled} placeholder={placeholder} type={type} ref={ref}  {...rest} />
        </StyledContainer>
    )
})

type TPropsStyle = {
    theme?: any
}

const StyledContainer = styled.div<TPropsStyle>`
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
    color:${props =>props.theme.colors.textColor};
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
    color:${props =>props.theme.colors.textColor};
    opacity: 0.5;
    }
`

