import React, { useEffect } from "react";
import {Button, Checkbox, Form, Input} from "antd";
import Link from 'next/link'
import IntlMessages from "../../../util/IntlMessages";
import {useAuth} from "../../../util/use-auth";
import CircularProgress from "../../../app/components/CircularProgress";

const SignIn = (props) => {
  const {isLoading, userLogin} = useAuth();

  const onFinishFailed = errorInfo => {
  };

  const onFinish = values => {
    userLogin(values);
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
          <div className="gx-app-login-content" style={{height: "90%"}}>
             <div className="gx-app-logo gx-mb-2">
              <img style={{marginLeft: "-16px"}} alt="example" src="/images/logo.png"/>
            </div>
            <div className="gx-mb-4">
              <h1>Good Afternoon 👋</h1>
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
                style={{fontWeight: "500"}}
                initialValue="admin@admin.com"
                label="Email"
                rules={[{required: true, message: 'The input is not valid E-mail!'}]} name="email">
                <Input style={{borderRadius: "22px"}} placeholder="Email"/>
              </Form.Item>
              <Form.Item
                style={{fontWeight: "500"}}
                initialValue="12345678"
                label="Password"
                rules={[{required: true, message: 'Please input your Password!'}]} name="password">
                <Input style={{borderRadius: "22px"}} type="password" placeholder="Password"/>
              </Form.Item>
              <Form.Item valuePropName="checked">
                <Checkbox className="gx-text-light">Remember me</Checkbox>
                <Link href="/signin">
                  <a className="gx-login-form-forgot gx-text-light" style={{float: "right"}}>Forgot password?</a></Link>
              </Form.Item>
              <Form.Item>
                <Button className="gx-mb-0 design-button" style={{background: "#D3F36B"}} htmlType="submit">
                  Login
                </Button>
              </Form.Item>
              <div className="social-icons gx-mb-3">
                <img className="social-icons-img" src="/images/google-plus.png" alt='facebook'/>
                <img className="social-icons-img" src="/images/twitter.png" alt='twitter'/>
                <img className="social-icons-img" src="/images/facebook.png" alt='Neature'/>
              </div>
              {/* <div style={{textAlign: "center"}}> */}
                <div className="header__center gx-text-light gx-mb-4">or</div> 
                {/* <div class="line"></div>  */}
              {/* </div> */}
              <Form.Item>
                <Button className="gx-mb-0 design-button" htmlType="button">
                <Link href="/signup">
                <a className="gx-mb-0 design-button"  style={{border: "none"}}>
                  <IntlMessages id="app.userAuth.signUp"/>
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

export default SignIn;
