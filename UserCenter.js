import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Carousel, Tabs, Button,Avatar} from 'antd';
//import { Link } from 'react-router-dom';
//import {queryLessons} from './server'
//import CardList from './CardList'
import './Header.css';

const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class Us extends Component {
  render() {
    return (
    	<Layout className="father">
    	<div className="outer">
			<div className="mid" >
				<p className="us">个人中心</p>
					
			</div>
				<p className="slogen">总能得到您想要的答案</p>
			<div className="inner">
				<Avatar size="large" src="img/images/question/u310.png"/>
				<br />
				<h2>User</h2>
			</div>
			<div className="ask">
				<p><b>1<br />我的提问</b></p>
			</div>	
			<div className="answer ">
				<p><b>1<br />我的回答</b></p>
			</div>
	    </div>
	    <div className="others">
				<div className="ran">
					<p className="sp">热门问题</p>
					
				</div>
			</div>
			<div className="others">
				<div className="ran">
					<p className="sp">回答榜</p>
					
				</div>
			</div>
		</Layout>)
    }
}
export default Us;