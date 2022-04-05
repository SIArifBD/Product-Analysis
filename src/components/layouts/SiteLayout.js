import React from 'react';
import { Layout, Menu, } from 'antd';
import { useNavigate } from 'react-router-dom';
import './SiteLayout.css';
const { Header, Content, Footer } = Layout;

const SiteLayout = (props) => {
    const navigate = useNavigate();

    const onMenuItemClick = (item, key, keyPath, domEvent) => {
        key = item.key;
        if (key === 'home') {
            navigate('/')
        } else if (key === 'reviews') {
            navigate('/reviews')
        } else if (key === 'dashboard') {
            navigate('/dashboard')
        } else if (key === 'blogs') {
            navigate('/blogs')
        } else if (key === 'about') {
            navigate('/about')
        }
    }
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} onClick={onMenuItemClick}>
                    <Menu.Item key={'home'}>Home</Menu.Item>
                    <Menu.Item key={'reviews'}>Reviews</Menu.Item>
                    <Menu.Item key={'dashboard'}>Dashboard</Menu.Item>
                    <Menu.Item key={'blogs'}>Blogs</Menu.Item>
                    <Menu.Item key={'about'}>About Us</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content"> {props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Developed by @ Md. Saiful Islam Arif</Footer>
        </Layout>
    );
};

export default SiteLayout;