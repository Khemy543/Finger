
import React, { } from 'react';
import axios from 'axios';
import '../assets/css/login.css';
import { Form, Input, Checkbox, Button, Card } from 'antd';
import Icon from 'antd/lib/icon';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/register.css';
const FormItem = Form.Item;

//const Option = Select.Option;

class RegistrationForm extends React.Component {

  
  constructor(){  
    super();
    this.state = {
      FirstName:'',
      LastName:'',
      UserName : '',
      Email:'',
      Password : '',
    };
  }

    onChange = (e) =>{
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }


    onSubmit = (e) => {
      e.preventDefault();
      const {FirstName,LastName,UserName ,Email, Password} = this.state;
      axios
      .post('http://fingerapi20180423093629.azurewebsites.net/postUsers/signUps',{FirstName,LastName,UserName ,Email, Password})
      .then((result) => {
       console.log(result);
       console.log(result.data);
      });
}


   
  

  render() {
    const {FirstName ,LastName , UserName ,Email , Password } = this.state;
    return (
      <div className='Login'>
      <Card id="card" title='Registration' style={{ width: '400px', height: '550px', margin: '20px auto' }}>
        <Form onSubmit={this.onSubmit}>
          <div style={{marginTop: '40px'}}>
          <FormItem>
              <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="FirstName"  value={FirstName} onChange= {this.onChange} placeholder="Please input your First Name" />
          </FormItem>
          <FormItem>
              <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="LastName" value={LastName} onChange= {this.onChange}  type="text" placeholder="Please input your Last Name" />
          </FormItem>
          <FormItem>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="UserName" value={UserName} onChange= {this.onChange} placeholder="Please input your Username" />
          </FormItem>
          <FormItem>
            <Input  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} name="Email" value={Email} onChange= {this.onChange} type="mail" placeholder="Please input your email" />
        </FormItem>
        <FormItem>
          <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} name="Password" value={Password} onChange= {this.onChange} type="password" placeholder="Please input your Password" />
      </FormItem>
    <Button type="primary" htmlType="submit" className="login-form-button">
    Register
  </Button>
         
          </div>
        </Form>
      </Card>
      </div>
    );
  }
}

export const Register = Form.create()(RegistrationForm);

