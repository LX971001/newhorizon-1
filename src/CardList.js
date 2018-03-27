import React from 'react';
import {List, Card} from 'antd';
import './CardList.css'

class CardList extends React.Component {
  render(){
    const { imagecard } = this.props
    return(
        <List
          className="showcase"
          rowKey="id"
          grid={{gutter:32,lg:5,md:5,sm:3,xs:2}}
          dataSource={[...imagecard]}
          renderItem={v=>
            <List.Item key={v._id}>
              <Card
                bordered={false}
                noHovering>
                <div className="card-header">
                  <img src={v.img} alt=""/>
                  </div>
                  <div className="card-content">
                    <h4>{v.title}</h4>
                    <p>{v.describe}</p>
                  </div>
                  <div className="card-footer">
                    <div className="footerprice">{v.price}</div>
                    <div className="footerstatus">{v.status}</div>
                    <div className="footertype">{v.type}</div>
                  </div>
                </Card>
            </List.Item>
          }
      />
    );
  }
}

export default CardList
