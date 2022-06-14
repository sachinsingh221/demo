import React, { useState, useEffect } from 'react';
import { Spin, Layout, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/header';
import SiteStyle from '../../styled/styled';
// import BottomBar from '../components/footer';

const { Content, Footer, Header,Sider } = Layout;
function Master({ children,...rest }) {
    return (
        <SiteStyle>
            <Layout className="site-layout" >
                <Header className="site-header"><Topbar/></Header>
                <Content className="site-content">{<Outlet/>}</Content>
                {/* <Footer className="site-footer"><BottomBar /></Footer> */}
            </Layout>
        </SiteStyle>
    );
};

export default Master
