import React from 'react';
import { useForm } from "react-hook-form";
import { Layout } from 'components'

type Inputs = {
    username: string,
    password: string,
    loginType:String
};

export const Login: React.FC = () => {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = (data: any) => console.log(data);

    return (
        <Layout>
            <div>
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex',flexDirection:'column'}}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input name="username" defaultValue="test" ref={register} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="password" ref={register({ required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <span style={{color:'red'}}>This field is required</span>}

                    <select name="loginType"  ref={register}>
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