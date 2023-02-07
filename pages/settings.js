import React from 'react';

import { Card, Tabs, Button, Checkbox, Switch} from "antd";

const TabPane = Tabs.TabPane;

function settings() {

    const callback = (key) => {
	};

    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
				<h1 className='gx-font-weight-semi-bold' style={{fontSize: "30px"}}>Lorem ipsum dolor</h1>
				<div style={{    width: "12%",marginTop: "20px"}}>
					<Button className="gx-mb-0 design-button" style={{background: "#D3F36B", border: "1px solid #C2C2C2", width: "60%"}} htmlType="button">
						Save
					</Button>
				</div>	
			</div>
			<Tabs defaultActiveKey="1" onChange={callback}>
				<TabPane tab="Device Settings" key="1">
                    <h4 className='gx-font-weight-semi-bold gx-mt-4'>Lorem Ipsum</h4>
                    <Checkbox className='gx-mb-2 gx-mt-2'>Lorem ipsum dolor sit amet</Checkbox><br />
                    <Checkbox className='gx-mb-2'>Sed ut perspiciatis unde</Checkbox><br />
                    <Checkbox defaultChecked>Quis autem vel eum iure</Checkbox><br />

                    <h4 className='gx-font-weight-semi-bold gx-mt-4'>Excepteur sint occaecat cupidatat non proident</h4>
                    <Checkbox className='gx-mb-2 gx-mt-2'>Lorem ipsum dolor sit amet</Checkbox><br />
                    <Checkbox className='gx-mb-2'>Sed ut perspiciatis unde</Checkbox><br />
                    <Checkbox defaultChecked>Quis autem vel eum iure</Checkbox><br />

                    <h4 className='gx-font-weight-semi-bold gx-mt-4'>Duis aute irure dolor in reprehenderit</h4>
                    <Checkbox className='gx-mb-2 gx-mt-2'>Lorem ipsum dolor sit amet</Checkbox><br />
                    <Checkbox className='gx-mb-2'>Sed ut perspiciatis unde</Checkbox><br />
                    <Checkbox defaultChecked>Quis autem vel eum iure</Checkbox><br />

                    <h4 className='gx-font-weight-semi-bold gx-mt-4'>lorem Ipsum</h4>
                    <Switch size="small" defaultChecked/>
                </TabPane>
				<TabPane tab="Payment Settings" key="2">
                    <h4 className='gx-font-weight-semi-bold gx-mt-4 gx-mb-3'>Default Payment Method</h4>
                    <Card>
                        <img src="/images/visa.png" className='gx-mr-3'/><span>Visa ending in 1234</span>
                        <Button  className="gx-mb-0 design-button" style={{float: "right", background: "transparent", border: "none", width: "8%", marginLeft: "12px"}}>Remove</Button>
                        <Button  className="gx-mb-0 design-button" style={{float: "right", background: "transparent", border: "1px solid #C2C2C2", width: "8%"}}>Edit</Button>
                    </Card>

                    <h4 className='gx-font-weight-semi-bold gx-mt-5 gx-mb-3'>Saved Payment Method</h4>
                    <Card>
                        <img src="/images/visa.png" className='gx-mr-3'/><span>Visa ending in 1234</span>
                        <Button  className="gx-mb-0 design-button" style={{float: "right", background: "transparent", border: "none", width: "8%", marginLeft: "12px"}}>Remove</Button>
                        <Button  className="gx-mb-0 design-button" style={{float: "right", background: "transparent", border: "1px solid #C2C2C2", width: "12%", marginLeft: "12px"}}>Set as default</Button>
                        <Button  className="gx-mb-0 design-button" style={{float: "right", background: "transparent", border: "1px solid #C2C2C2", width: "8%"}}>Edit</Button>
                    </Card>
                </TabPane>
			</Tabs>
        </div>
    );
}

export default settings;