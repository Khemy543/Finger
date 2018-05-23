import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card, Divider ,List} from 'antd';
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Header} from '../components/Header';
import {Post} from '../components/Postcard';
import {Side} from '../components/Sidebar';
import {Rightside} from '../components/Rightside';
import '../assets/css/homepage.css';

class Homepage extends React.Component{
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
    const response = await fetch("http://fingerapi20180423093629.azurewebsites.net/getTopics/homepage");
    const json = await response.json();
    this.setState({ data: json.message });
  }
render() {
      console.log(this.state.data);
    return (
          <div>
            <List
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
          <List.Item>
          <Post some = {item}/>
        </List.Item>
        )}/>
            
          <Header />
          <Side/>
          <right>
            <Rightside />
          </right>
          </div>
  
    );
  }
}
export const  homepage = Form.create()(Homepage);