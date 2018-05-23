import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/side.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Sidebar extends React.Component{

            onSubmit(){
            axios
            .post('http://fingerapi20180423093629.azurewebsites.net/getUsers/logout')
            .then((result) => {
            console.log(result);
            console.log(result.data);
            });
          }


    render() {
      return(
        <div className="sidebar">
            <ul>
                <br></br>
                <br></br>
                <br></br>
                <li><Link to="/">Home</Link></li>
                
                <li><Link to="/trends">Topics</Link></li>
                <br></br>
                <br></br>
                
                <li><Link to="#">Help Center</Link></li>
                
              </ul>
    </div>
      );
    }
  }
  export const  Side = Form.create()( Sidebar);