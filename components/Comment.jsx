import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card, Divider, List, Avatar } from 'antd';
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink} from 'reactstrap'; 
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/comment.css';




class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
   
        render() {
          return(
          
             <Card 
             id="comment"
             style={{ width: 600, borderRadius:'10px',height:'50px' }}
             >
               <CardBody>
                 <CardText style={{height:'15px'}} alt=""> {this.props.item.CommentMessage}</CardText>
                 </CardBody>
                 </Card>
               
        );
       }
      }
      export const CommentBox = Form.create()(Comment);