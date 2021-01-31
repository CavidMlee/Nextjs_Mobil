import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import { css } from '@emotion/css'
import { Layout, Authcard } from 'components';
import { useCountdownTimer } from 'hooks';
import { Modal, Button, Input } from 'components/ui/kit';
import {Login,Register} from 'containers'

import styled from '@emotion/styled';

export const Home: React.FC = () => {

    const { timerSeconds, timerMinutes, setStart } = useCountdownTimer(1)

    const [openModal, setOpenModal] = useState(false);
    const [openRegisterModal,setOpenRegisterModal] = useState(false)

    const onOpenModal = () => setOpenModal(true);
    const onCloseModal = () => setOpenModal(false);
    const onCloseRegisterModal = () => setOpenRegisterModal(false)

    const myRef = React.useRef(null);

    const ChangeModal =()=>{
        setOpenRegisterModal(!openRegisterModal)
        setOpenModal(!openModal)
    }

    return (
        <Layout>
            <div className={myStyle}>
                <div>
                    <button onClick={onOpenModal}>Open modal</button>
                    <Modal isOpen={openModal} onCloseModal={onCloseModal}>
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
                            <Register />
                        </Authcard>
                    </Modal>
                </div>
                <button onClick={() => setStart(true)}>Start</button>
                <h1>Home</h1>
                <span>minute: {timerMinutes} second: {timerSeconds}</span>
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

