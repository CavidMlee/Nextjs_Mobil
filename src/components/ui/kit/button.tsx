import React from "react";
import styled from '@emotion/styled'


//Button
interface IProps {
    disabled?: boolean;
    onClick?: () => void;
    title:string;
    [rest:string]: any;
}

export const Button: React.FC<IProps> = ({
    disabled = false,
    onClick,
    title,
    ...rest
}) => {
    return (
        <StyledButton disabled={disabled} onClick={onClick} {...rest}>
            <span className='buttonTitle'>{title}</span>
        </StyledButton>
    );
};

//SocialAuthBtn

interface ISocialProps {

    onClick?: () => void;
    title:string,
    titleType:string;
    img?:string,
    [rest:string]: any;
}

export const SocialAuthButton:React.FC<ISocialProps> = ({
    onClick,
    title,
    titleType,
    img,
    rest
}) =>{
    return(
        <StyledSocialButton onClick={onClick} {...rest} titleType={titleType} >
            <img src={img} alt='' />
            <span className='socialButtonTitle'>{title}</span>
        </StyledSocialButton>
    );
}



type TButtonProps={
    theme?:any,
}

const StyledButton = styled.button<TButtonProps>`
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
type TSocialButtonProps={
    theme?:any,
    titleType?:string,
    margin?:string,
}

const StyledSocialButton = styled.button<TSocialButtonProps>`
    border: none;
    background-color: ${props => props.theme.colors.socialButtonBackground};
    border-radius: 5px;
    padding:0 30px;
    height:45px;
    width:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    margin-bottom:10px;
    cursor: pointer;
    position: relative;
    &:focus{
        outline:none;
    }
    .socialButtonTitle{
        color: ${props => props.titleType === 'facebook'? '#3B5998' : '#4285F4' };
        font-family: Arimo;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
    }
    img{
        position:absolute;
        left:10px;
    }
`