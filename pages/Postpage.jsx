import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card, Divider, List, Avatar } from 'antd';
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Post } from '../components/Postcard';
import { Side } from '../components/Sidebar';
import { Rightside } from '../components/Rightside';
import { Addpost } from '../components/Modalpost';
import { CommentBox } from '../components/Comment';
import { Box } from '../components/CommentBox';
import { Fullpostcard } from '../components/fullpostcard';
import '../assets/css/post.css';


class Postpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.location.state.newData
    };
  }

  render() {
    return (
      <div>
        <Fullpostcard item={this.state.result} />

        <List
          className="listpost"
          itemLayout="horizontal"
          dataSource={this.state.result.Comments}
          renderItem={item => (
            <List.Item>
              <CommentBox item={this.state.result} />
            </List.Item>
          )}
        />

        <Box />
        <Header />
        <Side />
        <right>
          <Rightside />
        </right>
      </div>

    );
  }
}
export const postpage = Form.create()(Postpage);