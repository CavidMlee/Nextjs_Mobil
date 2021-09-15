import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import { css } from '@emotion/css'
import { Layout, Authcard,ItemCard } from 'components';
import { Modal, Button, Input } from 'components/ui/kit';
import { Login, Register, Otp } from 'containers'

import styled from '@emotion/styled';

export const Home: React.FC = () => {



    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false)
    const [openOtpModal, setOpenOtpModal] = useState(false);


    //LoginModal
    const onOpenLoginModal = () => setOpenLoginModal(true);
    const onCloseLoginModal = () => setOpenLoginModal(false);
    //RegisterModal
    const onCloseRegisterModal = () => setOpenRegisterModal(false)
    //OtpModal
    const onOpenOtpModal =()=>{setOpenOtpModal(true), setOpenRegisterModal(false)}
    const onCloseOtpModal = () => setOpenOtpModal(false)

    const myRef = React.useRef(null);

    const ChangeModal = () => {
        setOpenRegisterModal(!openRegisterModal)
        setOpenLoginModal(!openLoginModal)
    }

    

    return (
        <Layout>
            <div className={myStyle}>
                <div>
                    <button onClick={onOpenLoginModal}>Open modal</button>
                    <Modal isOpen={openLoginModal} onCloseModal={onCloseLoginModal}>
                        <Authcard
                            title='Daxil ol'
                            headerText='Profildən elanlarınızı izləyin, yeniləyin və redaktə edin'
                            footerText='Hesabınız yoxdur?'
                            footerFuncText='Qeydiyyat'
                            footerFunc={ChangeModal}
                        >
                            <Login />
                        </Authcard>
                    </Modal>
                    <Modal isOpen={openRegisterModal} onCloseModal={onCloseRegisterModal}>
                        <Authcard
                            title='Qeydiyyat'
                            headerText='Profildən elanlarınızı izləyin, yeniləyin və redaktə edin'
                            footerText='Hesabım artıq var.'
                            footerFuncText='Daxil ol'
                            footerFunc={ChangeModal}
                        >
                            <Register openOtpModal={onOpenOtpModal} />
                        </Authcard>
                    </Modal>

                    <Modal isOpen={openOtpModal} onCloseModal={onCloseOtpModal}>
                        <Authcard
                            title='OTP kod'
                            headerText='Qeydiyyatı bitirmək üçün OTP kodunu göndərin'
                        >
                            <Otp />
                        </Authcard>
                    </Modal>
                </div>
                <h1>Home</h1>
                <ItemCard />
            </div>
        </Layout>
    )
}

const myStyle = css`
  height:80vh;
  width:100vw;
  background-color:#703070;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

const linkStyle = css`
    padding:5px 10px;
    border-radius:3px;
    border: 1px solid white;
    margin-bottom:10px;
`
const StyledDiv = styled.div`
    height:600px;
    width:400px;
`

