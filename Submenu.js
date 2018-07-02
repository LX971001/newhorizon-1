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

class Smn extends Component {
  render() {
    return (
    	<Layout classname="mix">
    		
		      <Menu
		        mode="horizontal"
		        style={{lineHeight:'50px'}}
		      	
		      	className="menu">
		      	
		      	<Menu.Item key="rec" className="textm">
		          推荐
		        </Menu.Item>
		        <Menu.Item key="new" className="textm">
		          最新
		        </Menu.Item>
		        <Menu.Item key="wait" className="textm">
		          等待回答
		        </Menu.Item>
		   
		       
		      </Menu>
		    
		</Layout>)
    }
}
export default Smn;