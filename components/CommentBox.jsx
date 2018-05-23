import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card, Divider, List, Avatar } from 'antd';
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap'; 
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import { Upload } from 'antd';
import { Badge } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/commentbox.css';




class Commentbox extends React.Component {
   
        render() {
          return(
          
             <Card 
             id="commentbox"
             style={{ width:600 , height:'90px'}}>
               <CardBody>
                 <textarea style={{height:'50px',width:'550px' , position:'relative',border:'none' ,bottom:'20px'}} placeholder="Add comment"/>
                 <Button style={{position:'relative', left:512 , bottom:'20px'}}>send</Button>
                 </CardBody>
               
            </Card>
        );
       }
      }
      export const Box = Form.create()(Commentbox);