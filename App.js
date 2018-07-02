import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import axios from 'axios'
import {Layout, Menu, Icon, Input, Carousel, Tabs, Button, Breadcrumb} from 'antd';
import TopHeader from './Header'
import Searching from './SearchingBar'
import Smn from './Submenu'
import Questions from './Questions'
import Us from './UserCenter'
import { queryQuestions } from './server'
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

class App extends Component {
  
 
  render() {
  	
  	
    return (
      <div className="App">
    
      <Layout>
    <Layout className="layout"> 
  
    
    <TopHeader />	
		<Content style={{ width: 1400,height: 35 }}>
      <Searching />
      </Content>
   
      <Smn/>
    
  </Layout>
    <Layout>
     
      <Layout style={{ padding: '0 24px 24px' }}>
      
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700}}>
          <Questions/>
        </Content> 
        <Sider width={350} style={{ background: '#fff' }}>
        <Us/>
      </Sider>
      </Layout>
    </Layout>
  </Layout>
      </div>
    );
  }
}
window.onload=function(){
	
            function getQuestionid() { 
	            return axios.get('http://47.106.72.161:10000/v1/questions'); 
            } 
            function getQuestion() { 
	            return axios.get('http://47.106.72.161:10000/v1/questions/question_id'); 
            } 
            axios.all([getQuestionid(), getQuestion()]) 
                .then(axios.spread(function (getQuestionid, getQuestion) { // Both requests are now complete 
                }));	
            

        }

export default App;
