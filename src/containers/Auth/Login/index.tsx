import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Layout } from 'components';
import { cookies } from 'utils';
import { cookieAuthKey } from 'api';
import Router from 'next/router';
import { css } from '@emotion/css'
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
            cookies.set(cookieAuthKey,accessToken)
            cookies.set('exTN',expiredToken)

            console.log('success: ', res)

        },
    })

    

    const onSubmit = (data: any) => {
        loginMutation.mutate(data)
    }

    return (
        <Layout>
            <div className={myStyle}>
                <h1>LogIn</h1>
            {loginMutation.isLoading && <div>Loading....</div>}
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input name="username" defaultValue="test" ref={register} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="password" ref={register({ required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <span style={{ color: 'red' }}>This field is required</span>}

                    <select name="loginType" ref={register}>
                        <option value="SIMPLE">SIMPLE</option>
                        <option value="FACEBOOK">FACEBOOK</option>
                        <option value="GOOGLE">GOOGLE</option>
                    </select>

                    <input type="submit" />
                </form>
            </div>
        </Layout>
    )
}


const myStyle = css`
  height:80vh;
  width:100vw;
  background-color:#248b46;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  input,select{
      margin-top:20px;
      width:400px;
      height:45px;
  }
`