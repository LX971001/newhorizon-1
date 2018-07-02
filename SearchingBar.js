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

class Searching extends Component {
  render() {
    return (
    	<Layout className="father" >
    	<div class="sbs" style={{height:'64px'}}>
    		<Input className="search"/>
    		<span>
		    	<Button type="primary" className="btn1">搜索问题</Button>
		    </span>
		    <span>
		    	<Button className="btn2">搜索答案</Button>
		    </span>
		    </div>
		</Layout>)
    }
}
export default Searching;