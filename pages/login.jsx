
import React from 'react';
import { DatePicker } from 'antd';
import axios from 'axios';
import '../assets/css/login.css';
import { Form, Input, Checkbox, Button, Card , Badge} from 'antd';
import Icon from 'antd/lib/icon';

import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';
import {Rightside} from '../components/Rightside';
import {BrowserRouter,router,indexedRoute} from 'react-router-dom';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {


  constructor(){  
    super();
    this.state = {
      UserName : '',
      Password : '',
    };
  }
  
    onChange = (e) =>{
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }


    onSubmit = (e) => {
      e.preventDefault();true
    
      const {UserName , Password} = this.state;
      /*
      axios.post('http://fingerapi20180423093629.azurewebsites.net/postUsers/login', {
        UserName: '',
        Password: ''
      },{withCredentials: true})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
      */
      axios
      .post('http://fingerapi20180423093629.azurewebsites.net/postUsers/login',{UserName , Password})
      .then((result) => {
       console.log(result);
       console.log(result.data);
       if(result.data.flag == true)
       {
        this.props.history.push('/');
      }
       else 
       {
        setTimeout(function(){ alert(result.data.message)}, 100);
        this.props.history.push('/login');
       }
        


      });
}

      
    
      
    
   
  

  render() {
    const { UserName, Password } = this.state;
    return (
      <div>
      <Card id="card" title='Login To Finger' style={{ width: '400px', height: '500px', margin: '20px auto'}}>
        <Form  id="login-form" onSubmit={this.onSubmit}>
          <div style={{marginTop: '40px'}}>
          <FormItem>
              <Input  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}  name="UserName"  value={UserName} onChange= {this.onChange} placeholder="Username"/>
          </FormItem>
          <FormItem>
              <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} name="Password"   value={Password} onChange={this.onChange} type="password" placeholder="Password"/>
          </FormItem>
          <FormItem>
              <Checkbox>Remember me</Checkbox>
              <h4><Link to="/ForgetPassword">Forgot Password</Link>
            </h4>
            <Button id="submit" type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
            <h4>
            <Link to="/Register">register now!</Link>
          </h4>
            </FormItem>
          </div>
        </Form>
      </Card>
      </div>
    );
  }
}

export const Login = Form.create()(NormalLoginForm);
