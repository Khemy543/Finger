import React, { } from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card,List } from 'antd';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Header} from '../components/Header';
import '../assets/css/profile.css';
import {Side} from '../components/Sidebar';
import {Rightside} from '../components/Rightside';

const data = [
    'Gideon',
    'Assafuah',
    'gassafuah@gmail.com',
  ];

class Profilepage extends React.Component{

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
    const response = await fetch("http://fingerapi20180423093629.azurewebsites.net/getTopics/");
    const json = await response.json();
    this.setState({ data: json });
  }
  
render() {
    return (
      <div>
         <div className="profile">
         <div className="p_header">
                                <h3>Oboi_Khemy</h3>
                                <h7>Gideon Assafuah</h7>
                                </div>
                            <div className="p_body">
                            <List
                            className="about"
                            size="large"
                            bordered
                            dataSource={data}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                            />
                                </div>
                            <div class="p_footer">
                                <ul>
                                    <li><Link to="/login" style={{textDecoration:'none'}}><h7>LogOut</h7></Link></li>
                                    <li><Link to="/login" style={{textDecoration:'none'}}><h7>Delete Account</h7></Link></li>
                                    <li><Link to="/editForm" style={{textDecoration:'none'}}><h7>Edit</h7></Link></li>
                                    </ul>
                                </div>
             </div>
             <Header />
          <Side/>
          <right>
            <Rightside/>
          </right>
        </div>
  
    );
  }
}
export const  profile = Form.create()(Profilepage);