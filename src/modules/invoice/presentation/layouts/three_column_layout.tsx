import React from 'react';
import { Layout, Menu, MenuProps, Space } from 'antd';
import SideMenu from '../components/SideMenu';

const { Header, Footer, Sider, Content } = Layout;

const HEADER_SIZE = 64;
const FOOTER_SIZE = 48;

const headerStyle: React.CSSProperties = {
  color: '#fff',
  height: HEADER_SIZE,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: `calc(100vh - ${HEADER_SIZE+FOOTER_SIZE}px)`,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  verticalAlign: 'middle',
  color: '#fff',
  backgroundColor: '#7dbcea',
  minHeight: FOOTER_SIZE,
  maxHeight: FOOTER_SIZE
};
const brandStyle:React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: 'bold'
}

interface PropsThreeColumnLayout {
    children?: React.ReactNode
}


const ThreeColumnLayout = (props: PropsThreeColumnLayout) => (

  <Space direction="vertical" style={{ width: '100%', flex: 1 }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        <span style={brandStyle}>BlocLand</span>
      </Header>
      <Layout>
        <Sider style={siderStyle}>
          <SideMenu />
        </Sider>
        <Content style={contentStyle}>
            {props.children}
        </Content>
        <Sider style={siderStyle}>
          <SideMenu />
        </Sider>
      </Layout>
      <Footer style={footerStyle}>
        Copyright DjC 2023
      </Footer>
    </Layout>
  </Space>
);

export default ThreeColumnLayout;