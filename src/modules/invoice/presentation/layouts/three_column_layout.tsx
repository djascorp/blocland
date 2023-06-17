import React from 'react';
import { Layout, Menu, MenuProps, Space, theme } from 'antd';
import SideMenu from '../components/SideMenu';
import { blue } from '@ant-design/colors';
import { useTheme } from '../../utils/color';


const { Header, Footer, Sider, Content } = Layout;

const HEADER_SIZE = 64;
const FOOTER_SIZE = 48;

const headerStyle: React.CSSProperties = {
  color: '#fff',
  height: HEADER_SIZE,
  paddingInline: 50,
  lineHeight: '64px',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: `calc(100vh - ${HEADER_SIZE + FOOTER_SIZE}px)`,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  verticalAlign: 'middle',
  color: '#fff',
  minHeight: FOOTER_SIZE,
  maxHeight: FOOTER_SIZE
};
const brandStyle: React.CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: 'bold'
}

interface PropsThreeColumnLayout {
  children?: React.ReactNode
}


const ThreeColumnLayout = (props: PropsThreeColumnLayout) => {
  const { theme } = useTheme();
  return (
    <Space direction="vertical" style={{ width: '100%', flex: 1 }} size={[0, 48]}>
      <Layout>
        <Sider width={'380px'} style={siderStyle} breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <SideMenu headerSize={HEADER_SIZE} />
        </Sider>
        <Layout>
          <Header style={headerStyle}>Blocland - InvoiceForge</Header>
          <Content style={contentStyle}>{props.children}</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default ThreeColumnLayout;
