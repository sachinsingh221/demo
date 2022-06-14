import React,{ useEffect, useState } from "react";
import { Col, Row, Typography } from 'antd'
import {ThemeContextHook} from "../../../context";

function Header(props){
    const [ message, setMessage ] = useState('Blog Site')

    return(
        
        <>
        <ThemeContextHook.Consumer>{(context) => {
                const {isLightTheme, light, dark} = context
                const theme = isLightTheme ? light:dark;
            <Row>
                <Col span={12}>
                    {/* <Link href='/' passHref> */}
                        <Typography.Text style={{color: theme.color}}>{message}</Typography.Text>
                    {/* </Link> */}
                </Col>
                <Col offset={10} span={2}>
                    {/* <Link href='/contact-us' passHref> */}
                        <Typography.Text>Contact Us</Typography.Text>
                    {/* </Link> */}
                </Col>
            </Row>
        }}</ThemeContextHook.Consumer>
        </>
    )
}

export default Header