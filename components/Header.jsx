import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
import { Menu, Switch } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';
import {SearchButton} from '../components/Searchbutton';

const Search = Input.Search;

class Head extends React.Component{
    render() {
      return(
          <div className = "content">
        <div className="headerMenu" style={{borderBottom:'1px solid #E0E0E0',  backgroundColor:'white', height:' 70px',width:'100%',top:' 0px',overflow:' hidden',position: 'fixed'}}>
        
        <div id="wrapper">
            <div className="logo">
                    <Link to ="/">
                    <img src = "../img/logo.png"/>
                    </Link>
            </div>
            
                <SearchButton />  
               
                <div id="menu">
                    <Link to="/trends">
                    <img src="../img/trending.png" style = {{ width:'21px', height: '21px'}}/>
                    </Link>
                    <Link to="/">
                    <img src="../img/message1.png" style = {{ width:'21px', height: '21px'}}/>
                    </Link>
                   <Link to="/profile">
                    <img src="../img/profile2.png" style = {{ width:'21px', height: '21px'}}/>
                    </Link>
                </div>
                
        </div>
        
</div>

    
    
</div>
      
    );
   }
  }
export const  Header = Form.create()( Head);