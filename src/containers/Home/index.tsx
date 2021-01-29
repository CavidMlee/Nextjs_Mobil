import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import { css } from '@emotion/css'
import { Layout } from 'components';
import { useCountdownTimer } from 'hooks';
import { Modal, Button, Input } from 'components/ui/kit';

import styled from '@emotion/styled';

export const Home: React.FC = () => {

    const { timerSeconds, timerMinutes, setStart } = useCountdownTimer(1)

    const [openModal, setOpenModal] = useState(false);

    const onOpenModal = () => setOpenModal(true);
    const onCloseModal = () => setOpenModal(false);

    const myRef = React.useRef(null);

    return (
        <Layout>
            <div className={myStyle}>
                <div>
                    <button onClick={onOpenModal}>Open modal</button>
                    <Modal open={openModal} onCloseModal={onCloseModal}>
                        <StyledDiv>
                            <h1>Daxil ol</h1>
                            <Input placeholder='User name' label='Elektron poçt' />
                            <Input placeholder='Password' type='password' label='Şifrə' />
                            <Button title='Daxil ol' />
                        </StyledDiv>
                    </Modal>
                </div>
                <button onClick={() => setStart(true)}>Start</button>
                <h1>Home</h1>
                <Link href='/login'>
                    <a className={linkStyle}>Login</a>
                </Link>
                <Link href='/register'>
                    <a className={linkStyle}>Register</a>
                </Link>
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

