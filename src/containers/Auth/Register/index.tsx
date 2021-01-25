import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Layout } from 'components';
import { cookies } from 'utils';
import { cookieAuthKey } from 'api';
import Router from 'next/router';
import { css } from '@emotion/css'
import { registerClient } from 'api/dinamic-apis';
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
    phoneNumber:string,
    email:string,
    confirmPassword:string,
};

// Create a client
const queryClient = new QueryClient()

export const Register: React.FC = () => {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();


    // Mutations
    const registerMutation = useMutation(registerClient, {
        onSuccess: (res) => {
            const { description } = res
            alert(description)
            Router.push('/login')

            console.log('success: ', res)

        },
    })

    

    const onSubmit = (data: any) => {
        registerMutation.mutate(data)
    }

    return (
        <Layout>
            <div className={myStyle}>
                <h1>Register</h1>
            {registerMutation.isLoading && <div>Loading....</div>}

                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>

                    <input name="username" defaultValue="test" ref={register} />
                    {errors.password && <span style={{ color: 'red' }}>This field is required</span>}

                    <input name="password" ref={register({ required: true })} />
                    {errors.password && <span style={{ color: 'red' }}>This field is required</span>}

                    <input  name="phoneNumber" ref={register({ required: true })} />
                    {errors.password && <span style={{ color: 'red' }}>This field is required</span>}

                    <input name="email" ref={register({ required: true })} />
                    {errors.password && <span style={{ color: 'red' }}>This field is required</span>}

                    <input name="confirmPassword" ref={register({ required: true })} />
                    {errors.password && <span style={{ color: 'red' }}>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </Layout>
    )
}


const myStyle = css`
  height:80vh;
  width:100vw;
  background-color:#246a8b;
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