import React from 'react';
import styled from '@emotion/styled';


interface IProps{
    title?:string,
    headerText?:string,
    children:React.ReactNode,
    footerText?:string,
    footerFuncText?:string,
    footerFunc?:()=>void,
}

export const Authcard:React.FC<IProps> = ({title,headerText,children,footerText,footerFuncText,footerFunc}) =>{
    return(
        <Container>
            <h1>{title}</h1>
            <span className='headerText'>{headerText}</span>
            {children}
            <div className='footerContainer'>
                <span>{footerText}</span>
                <div onClick={footerFunc}>{footerFuncText}</div>
            </div>
        </Container>
    )
}

type TProps = {
    theme?: any;
  }

const Container = styled.div<TProps>`
    background-color:${props=>props.theme.colors.modalBackground};
    width:400px;
    height:auto;
    display:flex;
    flex-direction:column;
    h1{
        font-family: Arimo;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color:${props=>props.theme.colors.textColor};
        margin: 0 0 10px;
    }
    .headerText{
        font-family: Arimo;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 100%;
        color:${props=>props.theme.colors.textColor};
        opacity: 0.3;
        margin-bottom:30px;
    }
    .footerContainer{
        margin-top:30px;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        font-family: Arimo;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        span{
            color:${props=>props.theme.colors.textColor};
            margin-right:5px;
        }
        div{
            font-weight:600;
            color:${props=>props.theme.colors.primaryColor};
            cursor: pointer;
        }
    }
`