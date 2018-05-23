import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card, Avatar ,Divider,Modal , Radio ,List} from 'antd';
import { Menu, Switch } from 'antd';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Search = Input.Search;
const RadioGroup = Radio.Group;

const data = [
    {
      post: 'this is post',
    },
    {
      topic: 'this is topic',
    },
    {
      post: 'this is post',
    },
    {
      topic: 'this is topic',
    },
    {
        post: 'this is post',
      },
      {
        topic: 'this is topic',
      },
      {
        post: 'this is post',
      },
      {
        topic: 'this is topic',
      },
      {
        post: 'this is post',
      },
      {
        topic: 'this is topic',
      },
      {
        post: 'this is post',
      },
      {
        topic: 'this is topic',
      },
  ];

class search extends React.Component {

    constructor(){  
        super();
        this.state = {
          Search : '',
          visible: false , 
          value: '1'
        };
      }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
    handleOk = (e) => {
    const {Search , value} = this.state;
      console.log(e);
      this.setState({
        visible: true,
      });
      if(value=='1'){
        console.log(this.state.Search);
      axios
      .get(('http://fingerapi20180423093629.azurewebsites.net/search/Post?value ='+ this.state.Search))
      .then((result) => {
       console.log(result);
       console.log(result.data);
    });
}
else {
    axios
    .get('http://fingerapi20180423093629.azurewebsites.net/search/Topic?value=' + this.state.Search)
    .then((result) => {
     console.log(result);
     console.log(result.data);
  });
}
    }

    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    render() {
      return (
        <div>
          <Button icon="search" style={{ position: 'relative', left:'550px', top:'20px', background: 'white'}} onClick={this.showModal}>Search</Button>
          <Modal
            type=""
            title="Search for?"
            value={this.state.value}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            
            <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
            />
                <RadioGroup name="radiogroup" defaultValue={1} style={{position:'relative', left:'30px'}}>
                <Radio value={1}> POST </Radio>
                <Radio value={2}> TOPIC </Radio>
                </RadioGroup>
                
            
            <div>
            
                </div>
            
           
          </Modal>
        </div>
      );
    }
  }

  export const SearchButton = Form.create()(search);