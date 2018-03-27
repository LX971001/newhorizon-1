import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import InforCarousel from './InforCarousel';
import CardList from './CardList';
import './HomePage.css';
import { queryLessons } from './service';

const { Header, Content } = Layout;

class HomePage extends React.Component {
  state = {
    lessons:[],
    title:'jincan'
  }
  componentDidMount() {
    var that = this;
    that.getJsonData();
  }
  getJsonData = () => {
    queryLessons().then(res => {
      this.setState({lessons:res})
    });
  };
  render(){
    return(
      <Layout>
        <Header className="header">
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{lineHeight:'64px'}}
            >
            <Menu.Item key="1"><Link to='/home'>首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to='showquestions'>问答</Link></Menu.Item>
            <Menu.Item key="3"><Link to='exam'>评测</Link></Menu.Item>
          </Menu>
        </Header>
        <Content stylel={{width:"100%"}}>
          <div className="aply" >报名</div>
          <InforCarousel/>
          <CardList imagecard = {this.state.lessons}/>
        </Content>
      </Layout>
    )
  }
}

export default HomePage
