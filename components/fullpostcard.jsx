import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card , Avatar} from 'antd';
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap'; 
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/postcard.css';
import { relative } from 'path';
const { Meta } = Card;

class fullpostcard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
      }

      

    render(){
        return(
            <Card
            id="post"
            style={{width:600}}
            actions={[<Icon type="message" />,<Icon type="like" />,<h5>12</h5>, <Icon type="dislike" />,<h5>12</h5>]}
            >
            <CardTitle style={{fontWeight:'1', fontSize:'17px',fontStyle:'Sans-Sarif'}}>{this.props.item.Title}</CardTitle>
            <CardImg top width= "600px" top height="380px" style={{position:'relative', right:'25px'}} alt="" src={this.props.item.MediaLink}/>
            <CardText>{this.props.item.PostMessage}</CardText>
            </Card>

        );
    }
}

export const Fullpostcard = Form.create()(fullpostcard);