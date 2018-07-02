import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Carousel, Tabs, Button} from 'antd';
//import { Link } from 'react-router-dom';
//import {queryLessons} from './server'
//import CardList from './CardList'
import './Header.css';

const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class TopHeader extends Component {
  render() {
    return (
    	<Layout className="father">
    		<Header className="headerContainer" style={{height:'64px'}}>
		      <Menu
		        mode="horizontal"
		        style={{lineHeight:'64px'}}
		      	theme="dark"
		      	className="headerMenu">
		      	<div className="login">
		      		请<a>登录</a>,或<a>注册</a>
		      	</div>
		      	<Menu.Item key="index" className="index">
		          <Icon type="compass" />首页
		        </Menu.Item>
		        <Menu.Item key="question">
		          <Icon type="smile-o" />问答
		        </Menu.Item>
		        <Menu.Item key="judge">
		          <Icon type="edit" />评测
		        </Menu.Item>
		        <Menu.Item key="downloading">
		          <Icon type="download" />下载中心
		        </Menu.Item>
		        <Menu.Item key="aboutUs">
		          <Icon type="search" />关于我们
		        </Menu.Item>
		        <div className="shop">
		        	<Icon type="shopping-cart" id="shopIcon"/>
		        	<div id="shopText">购物车</div>
		        </div>
		      </Menu>
		    </Header>
		</Layout>)
    }
}
export default TopHeader;