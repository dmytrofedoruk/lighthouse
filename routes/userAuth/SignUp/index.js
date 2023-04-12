import React from "react";
import {Button, Checkbox, Form, Input, Radio} from "antd";
import Link from 'next/link'
import "./style.css";
import IntlMessages from "../../../util/IntlMessages";
import {useAuth} from "../../../util/use-auth";
import CircularProgress from "../../../app/components/CircularProgress";

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const SignUp = (props) => {
  const {isLoading, userSignup, getAuthUser} = useAuth();

  const onFinishFailed = errorInfo => {
  };

  const onFinish = values => {
    let data = {
      name : values.fname+ ' ' +values.lname,
      email: values.email,
      password : values.password,
      subscription:  values.subscription
    }
    // console.log(data);
    userSignup(data, () => {
      getAuthUser();
    });
  };

  return (
    // <div className="gx-app-login-wrap">
      // <div className="gx-app-login-container">
      <div className="gx-app-login-main-content">
      <div className="gx-app-logo-content">
        {/* <div className="gx-app-logo-content-bg">
          <img src="https://via.placeholder.com/272x395" alt='Neature'/>
        </div> */}
        <div className="gx-app-logo-wid">
          <h1 style={{color: "black", fontSize: "55px", fontWeight: "600"}}>Lorem ipsum dolor sit amet consectetur adipiscing</h1>
          <p className="gx-text-light">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
        </div>
        {/* <div className="gx-app-logo">
          <img alt="example" src="/images/logo.png"/>
        </div> */}
      </div>
      <div className="gx-app-login-content" style={{height: "100%", overflow: "auto"}}>
         <div className="gx-app-logo gx-mb-2">
          <img style={{marginLeft: "-16px"}} alt="example" src="/images/logo.png"/>
        </div>
        <div className="gx-mb-4">
          <h1>Sign Up 📝</h1>
          <p className="gx-text-light">Lorem ipsum dolor sit amet consectetu</p>
        </div>
        <Form
          initialValues={{remember: true}}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="gx-signin-form gx-form-row0">

          <Form.Item
            style={{fontWeight: "500", marginBottom: "2px"}}
            initialValue="Dmytro"
            label="First Name"
            name="fname">
            <Input style={{borderRadius: "22px"}} placeholder=""/>
          </Form.Item>
          <Form.Item
            style={{fontWeight: "500", marginBottom: "2px"}}
            initialValue="Fedoruk"
            label="Last Name"
            name="lname">
            <Input style={{borderRadius: "22px"}} placeholder="Email"/>
          </Form.Item>
          <Form.Item
            style={{fontWeight: "500", marginBottom: "2px"}}
            initialValue="dmytro.fedoru@gmail.com"
            label="Email"
            rules={[{required: true, message: 'The input is not valid E-mail!'}]} name="email">
            <Input style={{borderRadius: "22px"}} placeholder="Email"/>
          </Form.Item>
          <Form.Item
            style={{fontWeight: "500", marginBottom: "2px"}}
            initialValue="test123"
            label="Password"
            rules={[{required: true, message: 'Please input your Password!'}]} name="password">
            <Input style={{borderRadius: "22px"}} type="password" placeholder="Password"/>
          </Form.Item>
          <Form.Item
            style={{fontWeight: "500", marginBottom: "2px"}}
            initialValue="test123"
            label="Repeat Password"
             name="password">
            <Input style={{borderRadius: "22px"}} type="password" placeholder="Password"/>
          </Form.Item>
          {/* <Form.Item valuePropName="checked">
            <Checkbox className="gx-text-light">Remember me</Checkbox>
            <Link href="/forgot-password">
              <a className="gx-login-form-forgot gx-text-light" style={{float: "right"}}>Forgot password?</a></Link>
          </Form.Item> */}
          <Form.Item>
          <Form.Item style={{textAlign: "start"}} name="subscription">
            <RadioGroup defaultValue="monthly">
              <Radio value="monthly">Monthly</Radio>
              <Radio value="yearly">Yearly</Radio>
            </RadioGroup>
          </Form.Item>
            <Button className="gx-mb-0 design-button" style={{background: "#D3F36B"}} htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>

          <div className="social-icons gx-mb-3">
                <img className="social-icons-img" src="/images/google-plus.png" alt='facebook'/>
                <img className="social-icons-img" src="/images/twitter.png" alt='twitter'/>
                <img className="social-icons-img" src="/images/facebook.png" alt='Neature'/>
          </div>
          {/* <div style={{textAlign: "center"}}> */}
            <div className="header__center gx-text-light gx-mb-3">Already have an account?</div> 
            {/* <div class="line"></div>  */}
          {/* </div> */}
          <Form.Item>
            <Button className="gx-mb-0 design-button" htmlType="button">
            <Link href="/signin">
            <a className="gx-mb-0 design-button"  style={{border: "none"}}>
              Login
            </a>
          </Link>
            </Button>
          </Form.Item>
          
          {/* <span
          className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'</span> */}
        </Form>
      </div>
      {isLoading &&
      <div className="gx-loader-view">
        <CircularProgress/>
      </div>}
    </div>
  // </div>
// </div>
  );
};

export default SignUp;
