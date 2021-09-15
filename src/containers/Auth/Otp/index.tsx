import React, { DataHTMLAttributes, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Input, Button, SocialAuthButton } from 'components/ui/kit';
import { cookies } from 'utils';
import { cookieAuthKey } from 'api';
import Router from 'next/router';
import styled from '@emotion/styled'
import { loginClient } from 'api/dinamic-apis';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { useTimer } from 'react-timer-hook';

type Inputs = {
    code: string,
};

// Create a client
const queryClient = new QueryClient()

export const Otp: React.FC = () => {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: new Date().setSeconds(new Date().getSeconds() + 2), onExpire: () => console.warn('onExpire called') });


    // Mutations
    const loginMutation = useMutation(loginClient, {
        onSuccess: (res) => {
            const { accessToken, expiredToken } = res
            cookies.set(cookieAuthKey, accessToken)
            cookies.set('exTN', expiredToken)
            console.log('success: ', res)

        },
    })


    const onSubmit = (data: any) => {
        loginMutation.mutate(data)
    }

    return (
        <div>
            {loginMutation.isLoading && <div>Loading....</div>}
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
                <Input placeholder='OTP kod' label='OTP' name="code" ref={register} />
                {errors.code && <span style={{ color: 'red' }}>This field is required</span>}

                <OtpTimerContainer>
                    {isRunning
                        ?
                        <div><span>{minutes}</span> : <span>{seconds}</span></div>
                   :
                   <div className='restartTimer' onClick={() => {
                        const time: any = new Date();
                        time.setSeconds(time.getSeconds() + 300);
                        restart(time)
                    }}>Restart</div>
                    }
                </OtpTimerContainer>

                <Button title='Göndər' disabled={isRunning ? false : true} type="submit" />
            </form>

            <div>

            </div>
        </div>
    )
}



type TProps = {
    theme?: any
}
const OtpTimerContainer = styled.div<TProps>`
    margin:20px 0;
    display: flex;
    justify-content:center;
    align-items:center;
    font-family: Arimo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: ${props => props.theme.colors.textColor};
    opacity: 0.7;
    .restartTimer{
        cursor:pointer;
    }
    `