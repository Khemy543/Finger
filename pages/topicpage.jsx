import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card, List, Avatar } from 'antd';
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import axios from 'axios'
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Header } from '../components/Header';
import { TopicCard } from '../components/topicspost';
import { Side } from '../components/Sidebar';
import { Rightside } from '../components/Rightside';
import { Addpost } from '../components/Modalpost';
import '../assets/css/topic.css';
import { Uploadbutton } from '../components/Upload';
import { Postbutton } from '../components/addpostbutton';


class Topicpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id : this.props.match.params.value
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://fingerapi20180423093629.azurewebsites.net/getTopics/postfortopic/" + this.props.match.params.value);
    const json = await response.json();
    this.setState({ data: json });
  }

  handleSubmit(e){
      
      const { TopicId } = {
        TopicId : e,
        Shit : ''
      }

      axios.post("http://fingerapi20180423093629.azurewebsites.net/postSuscriber/newSuscriber", { TopicId, } )
      .then((result) => {
        console.log(result);
        console.log(result.data);
       });
  }

  render() {
    return (
      <div>
        
        <List
        className="listpost"
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <TopicCard some={item} />
            </List.Item>
          )}
        />
        <Card
          style={{ position: 'relative', top: '70px', left: '200px', width: 780, background: 'white', position: 'fixed' }}
          actions={[<h3>TOPIC</h3>, <Button id="join" onClick={() => this.handleSubmit(this.props.match.params.value)}>Subscribe</Button>, <Postbutton />]}>
        </Card>
        <Header />
        <Side />
        <right>
          <Rightside />
        </right>
      </div>

    );
  }
}
export const topics = Form.create()(Topicpage);