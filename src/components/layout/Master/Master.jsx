import React from 'react';
import PropTypes from "prop-types";
import { Layout } from 'antd';
import siteConfig from '../../../config/site.config';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../components/header';
import DashboardRoutes from '../../../variable/routes/DashboardRoutes';

import { DashboardContainer, DashboardGlobalStyles } from '../../styled/style';

const { Content, Footer } = Layout;
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '0px 0 0',
    flexShrink: '0',
    background: '#f1f3f6',
    position: 'relative',
  },
  footer: {
    background: '#ffffff',
    textAlign: 'center',
    borderTop: '1px solid #ededed',
  },
};

 class Master extends React.Component {
    constructor(props){
        super(props)
      }    
  render(){
  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout >
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout
            className="isoContentMainLayout"
          >
            <Content className="isomorphicContent" style={styles.content}>
              <DashboardRoutes />
            </Content>
            <Footer style={styles.footer}>{siteConfig.footerText}</Footer>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
        }
}
Master.contextTypes = {
  router: PropTypes.object
}
export default (Master);