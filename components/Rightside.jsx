import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card, Avatar ,Divider, List} from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/rightside.css';

class Rightsidebar extends React.Component {


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
            <div className="topic_list">
            
                <div className="head">
                    <Link to="#"><h4 style = {{ fontStyle:'Garamond'}}>Click to Download finger from Playstore</h4></Link>
                </div>
                <div className="body">
                    <h7>topics</h7>
                    <ul>
                 <li>   <List 
          className="list"
          itemLayout="horizontal"
          style={{width: '200px'}}
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="" />}
                title={<Link to = {{
                  pathname: '/topics/'+item.TopicId
                }}>
                {item.Title}
                </Link>}
                description= {item.Message}
              />
            </List.Item>
          )}
        /></li>
                    </ul>
                </div>
                <div className="footer">
                    <h7>
                        ABOUT Us * Support . Blog . Press . API . Jobs . Privacy.
         <p>Contact us on finger online nkwsia.com</p>

                        <p>@ 2018 FINGER</p>
                    </h7>
                </div>
            </div>
        );
    }
}

export const Rightside = Form.create()(Rightsidebar);