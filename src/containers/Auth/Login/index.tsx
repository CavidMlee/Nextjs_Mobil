import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Input, Button, SocialAuthButton } from 'components/ui/kit';
import { cookies } from 'utils';
import { cookieAuthKey } from 'api';
import Router from 'next/router';
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { loginClient } from 'api/dinamic-apis';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

type Inputs = {
    username: string,
    password: string,
    loginType: String
};

// Create a client
const queryClient = new QueryClient()

export const Login: React.FC = () => {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();


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
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* register your input into the hook by invoking the "register" function */}
                <Input placeholder='User name' label='Elektron poçt' name="username" defaultValue="test" ref={register} />

                {/* include validation with required or other standard HTML validation rules */}
                <Input placeholder='Password' type='password' label='Şifrə' name="password" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.password && <span style={{ color: 'red' }}>This field is required</span>}

                <div className={forgetPassword} >Şifrəmi unutmuşam</div>

                <Button title='Daxil ol' type="submit" />
            </form>

            <StyledForOrText>
                <span>və ya</span>
            </StyledForOrText>

            <div>
                <SocialAuthButton title='Facebook ilə daxil ol' titleType='facebook' img='static/icons/facebook.svg' />
                <SocialAuthButton title='Google ilə daxil ol' titleType='google' img='static/icons/google.svg' /> 
            </div>
        </div>
    )
}


const forgetPassword = css`
    font-family: Arimo;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #0063DC;
    margin:15px 0 30px;
`

type TProps = {
    theme?: any
}
const StyledForOrText = styled.div<TProps>`
    margin:10px 0;
    display: flex;
    justify-content:center;
    align-items:center;
    font-family: Arimo;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: ${props => props.theme.colors.textColor};
    opacity: 0.5;
    `