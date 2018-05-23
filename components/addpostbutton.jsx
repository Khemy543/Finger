import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card , Avatar, Modal,message, List} from 'antd';
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap'; 
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/postcard.css';
import { relative } from 'path';
import {Uploadbutton} from '../components/Upload';

class postbutton extends React.Component{
    state = {
        loading: false,
        visible: false,
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
        const { visible, loading } = this.state;
        return (
          <div>
            <Button type="default" onClick={this.showModal}>
              Add Post
            </Button>
            <Modal
              visible={visible}
              title="Create a post"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Return</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  Submit
                </Button>,
              ]}
            >
            <div>
            <textarea style={{height:'50px',width:'450px' , position:'relative',border:'1px solid #CAC9C9' , borderLeft:'none',borderRight:'none', borderBottom:'none',borderTop:'none',bottom:'20px'}} placeholder="Post Title"/>
                </div>
                <div>
            <textarea style={{height:'80px',width:'450px' , position:'relative',border:'1px solid #CAC9C9' , borderLeft:'none',borderRight:'none',bottom:'20px'}} placeholder="Post description"/>
                </div>
            <div>
              <Uploadbutton />
              </div>
            </Modal>
          </div>
        );
      }
}
export const Postbutton = Form.create()(postbutton);