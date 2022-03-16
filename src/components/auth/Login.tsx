import { Button, Carousel, Form, Input, Layout, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import useAdvestimentQuery from '../../hooks/useAdvestimentQuery'
import style from '../../style/_login.module.css'

const FormItem = Form.Item

const Login = () => {
    const {data: advertise} = useAdvestimentQuery()

    const data = advertise?.user

    return (
        <Layout className={style.login}>
            <div
                className={style.login__form}
            >
                <div
                    className={style.login__form_carousel}
                >
                    <Carousel autoplay className={style.login__form_carousel_content}>
                        {data?.map((da: any, index: number) => {
                            return(
                                <div className={style.login__form_carousel_content__slide} key={`advertise_${index}`}>
                                    <img src={da?.image} alt={da?.name}/>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <Form
                    className={style.login__form_content}
                    layout="vertical"
                >
                    <Typography
                        className={style.login__form_content__title}
                    >Welcome to Cinema</Typography>
                    <FormItem
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input size='large'/>
                    </FormItem>
                    <FormItem
                        name="password"
                        label="Password"
                    >
                        <Input.Password size='large'/>
                    </FormItem>
                    <Typography>
                        Quên mật khẩu?
                    </Typography>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        className={style.login__form_content_btn}
                        >
                        Sign In
                    </Button>
                    <Typography className={style.login__form_content_text}>
                        Bạn đã có tài khoản chưa ? <span>Đăng kí ngay</span>
                    </Typography>
                </Form>
            </div>
        </Layout>
    )
}

export default Login as React.FC