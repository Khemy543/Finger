import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card, Avatar, Modal, message, List } from 'antd';
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import axios from 'axios';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/topicbutton.css';
import { relative } from 'path';
import { Uploadbutton } from '../components/Upload';

class topicbutton extends React.Component {
  constructor(){  
    super();
    this.state = {
      loading: false,
      visible: false,
      Title : '',
      Message : '',
    };
  }

    onChange = (e) =>{
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }


    onSubmit = (e) => {
      e.preventDefault();

      const {Title , Message} = this.state;
      axios
      .post('http://fingerapi20180423093629.azurewebsites.net/getTopics/createTopic',{Title , Message})
      .then((result) => {
       console.log(result);
       console.log(result.data);
       //browserHistory.push('/' + result.data);
      });
}

  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  render() {
    const { Title, Message } = this.state;
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="default" onClick={this.showModal}>
          Add Topic
            </Button>
        <Modal
          visible={visible}
          onSubmit={this.onSubmit}
          title="Add a topic"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" htmlType="submit" loading={loading} onClick={this.handleOk} >
              create
                </Button>,
          ]}
        >
          <div>
            <textarea name="Title" onChange ={this.onChange} style={{ height: '50px', width: '450px', position: 'relative', border: '1px solid #CAC9C9', borderLeft: 'none', borderRight: 'none', borderBottom: 'none', borderTop: 'none', bottom: '20px' }} />
          </div>
          <div>
            <textarea name="Message" onChange={this.onChange} style={{ height: '80px', width: '450px', position: 'relative', border: '1px solid #CAC9C9', borderLeft: 'none', borderRight: 'none', bottom: '20px' }} />
          </div>
          <div class="col-3 frmCaption">Attachments:</div>
          <div class="col-9">
            <div class="customUpload btnUpload btnM">
              <span>Upload files</span>
              <input type="file" class="upload"  />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export const Topicbutton = Form.create()(topicbutton);