import React, { } from 'react';
import { Form, Input, Tooltip, Select, Row, Col, Checkbox, Button, AutoComplete, Card, List, Avatar, Carousel } from 'antd';
import Icon from 'antd/lib/icon';
import { Menu, Switch } from 'antd';
import axios from 'axios'
import '../assets/css/slidepage.css'



class slidepage extends React.Component {

    render() {
        return (
            <div>
            <Carousel autoplay className="move">
                <div><img src="img/bga.jpg" style={{height:'500px', width:'600px'}}/></div>
                <div><img src="img/backg.jpg" style={{height:'500px', width:'600px'}}/></div>
                <div><img src="img/background.jpg" style={{height:'500px', width:'600px'}}/></div>
                <div><img src="img/background.jpg" style={{height:'500px', width:'600px'}}/></div>
                
            </Carousel>
            <Button type="primary" style={{position:'relative', float:'right',top:'50px', right:'20px'}}>
                Start<Icon type="right" />
            </Button>
            </div>
        );
    }
}
export const Slidepage = Form.create()(slidepage);