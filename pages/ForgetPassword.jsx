
import React, { } from 'react';
//import { DatePicker } from 'antd';
import '../assets/css/login.css';
import { Form, Input, Icon, Checkbox, Button, Card } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;
//const Option = Select.Option;

class Forgot extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='ForgetPassword'>
      <Card title='Forget Password' style={{ width: '400px', height: '500px', margin: '20px auto' }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div style={{marginTop: '40px'}}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your email' }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
              )}
          </FormItem>
          <FormItem>
          {getFieldDecorator('password1', {
            rules: [{ required: true, message: 'Please input your Confirmation Code' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirmation Code" />
            )}
        </FormItem>

          <FormItem>
          {getFieldDecorator('password2', {
            rules: [{ required: true, message: 'Enter New Password' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter New Password" />
            )}
        </FormItem>
        <FormItem>
        {getFieldDecorator('password3', {
          rules: [{ required: true, message: 'Confirm New Password' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm New Password" />

          )}
          
      </FormItem>
      <Button type="primary" htmlType="submit" className="login-form-button">
      Log in
    </Button>
      
          </div>
        </Form>
      </Card>
      </div>
    );
  }
}


export const ForgetPassword = Form.create()(Forgot);
/*import React, { } from 'react';
//import { DatePicker } from 'antd';
import '../assets/css/login.css';
import { Form, Input, Icon, Checkbox, Button, Card } from 'antd';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button, AutoComplete, Card } from 'antd';
const FormItem = Form.Item;

class Forgot extends React.Component {
    render(){
        return(
   <Card title='Forgot Password' style={{ width: '400px', height: '500px', margin: '20px auto' }}>
   <div style={{marginTop: '40px'}}>

   <FormItem
     {...formItemLayout}
     label="E-mail"
   >
     {getFieldDecorator('email', {
       rules: [{
         type: 'email', message: 'The input is not valid E-mail!',
       }, {
         required: true, message: 'Please input your E-mail!',
       }],
     })(
       <Input />
     )}
   </FormItem>
 
 </div>
 </Card>

        )
    }

}
export const ForgetPassword = Form.create()(Forgot);
*/