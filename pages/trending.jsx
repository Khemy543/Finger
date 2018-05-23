import React, { } from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card, List, Avatar} from 'antd';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Rightside } from '../components/Rightside';
import { Side } from '../components/Sidebar';
import '../assets/css/trending.css';
import {Uploadbutton} from '../components/Upload';
import { Topicbutton } from '../components/topicbutton';


class Trending extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       data: []
     };
   }
 
 
   componentWillMount() {
     this.fetchData();
  }
  
 
 
   fetchData = async () => {
     const response = await fetch("http://fingerapi20180423093629.azurewebsites.net/getTopics/allTopics");
     const json = await response.json();
     this.setState({ data: json });
   }

   
  render() {
    return (
      <div>
        
        <List 
          className="list"
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<Link to = {{
                  pathname: '/topics/'+item.TopicId
                }}>
                {item.Title}
                </Link>}
                description= {item.Message}
              />
            </List.Item>
          )}
        />
         <Card
        style={{position:'relative', top:'70px', left:'200px', width:780 , background:'white', position:'fixed'}}
        actions={[<h3>ALL TOPICS</h3>,<Topicbutton />]}
        >
          </Card>
          <Header />
          <Side />
          <right>
            <Rightside/>
            </right>
      </div>

    );
  }
}
export const trends = Form.create()(Trending);