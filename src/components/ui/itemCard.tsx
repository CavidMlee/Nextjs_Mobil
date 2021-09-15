import React from 'react';
import styled from '@emotion/styled';



export const ItemCard:React.FC =() =>{
    return(
            <StyledCardContainer>
                <div className='imageContainer'>
                    <img src='https://picsum.photos/400/500' alt='' />
                </div>
                <div className='infoContainer'>
                    <div className='infoTextContainer'>
                        <div className='itemName'>Samsung Galaxy S12</div>
                        <div className ='itemBaseInfo'>6GB / 128GB / 2019</div>
                        <div className ='itemAddDate'>Bakı, 28.01.2021, 16:34</div>
                    </div>
                    <div className='infoIconContainer'>
                        <div className='priceContainer'>
                            <span>2180₼</span>
                        </div>
                    </div>
                </div>
            </StyledCardContainer>
    )
}

type TProps ={
    theme?:any
}

const StyledCardContainer = styled.div<TProps>`
    height:310px;
    width:250px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color:${props=>props.theme.colors.cardBackground};
    display:flex;
    flex-direction:column;
    overflow:hidden;
    cursor: pointer;
    .imageContainer{
        height:200px;
        width:100%;
        overflow:hidden;
        img{
            height:200px;
            width:100%;
            object-fit:cover;
            transition: transform .4s;
            &:hover{
                transform: scale(1.1);
            }
        }
    }
    .infoContainer{
        height:110px;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .infoTextContainer{
            height:80px;
            width:100%;
            padding:10px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            //text
            font-family: Arimo;
            font-style: normal;
            color:${props => props.theme.colors.textColor};
            .itemName{
                font-weight: bold;
                font-size: 16px;
                line-height: 18px;
            }
            .itemBaseInfo{
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
            }
            .itemAddDate{
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                opacity: 0.5;
            }
        }
        .infoIconContainer{
            height:30px;
            width:100%;
            .priceContainer{
                height:100%;
                width:85px;
                background-color:${props=>props.theme.colors.secondaryColor};
                border-radius: 0px 9px ;
                display:flex;
                justify-content:center;
                align-items:center;
                span{
                    font-family: Arimo;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 18px;
                    display: flex;
                    align-items: center;
                    color: #FFFFFF;
                }

            }
        }
    }
`