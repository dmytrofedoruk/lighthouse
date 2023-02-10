import React from 'react';
import {Col, Tabs, Button, Row} from "antd";
import TrafficRaiseCard from "../../app/components/Metrics/TrafficRaiseCard";

const TabPane = Tabs.TabPane;

const Dashboard = () => {
	const callback = (key) => {
};

	return (
		<div>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<h1 className='gx-font-weight-semi-bold' style={{fontSize: "30px"}}>Lorem ipsum dolor</h1>
				<div style={{    width: "33%",marginTop: "20px"}}>
					<Button className="gx-mb-0 design-button" style={{background: "#fff", border: "1px solid #C2C2C2", width: "38%"}} htmlType="button">
						+ Lorem ipsum
					</Button>
					<Button className="gx-mb-0 design-button" style={{background: "#D3F36B", border: "1px solid #C2C2C2", width: "38%"}} htmlType="button">
						+ Lorem ipsum
					</Button>
				</div>	
			</div>
			<Tabs defaultActiveKey="3" onChange={callback}>
				<TabPane tab="Lorem" key="1"></TabPane>
				<TabPane tab="Ipsum" key="2"></TabPane>
				<TabPane tab="Dolor" key="3"></TabPane>
			</Tabs>
			<div className='search-bar'>
				<img style={{width: "15px"}} src='/images/search.svg'/><span className='gx-ml-2 gx-text-light'>Search</span>
				<div style={{float: "right"}} className="gx-mr-4">
					<img style={{width: "13px"}} src='/images/share.svg'/><span className='gx-ml-1'>Share</span>
				</div>
				<div style={{float: "right"}} className="gx-mr-4">
					<img style={{width: "16px"}} src='/images/sortby.svg'/><span className='gx-ml-1'>Sort By</span>
				</div>
			</div>

			<Row className='gx-mt-4'>
				<Col xl={8} lg={12} md={12} sm={12} xs={24}>
					<TrafficRaiseCard/>
				</Col>
				<Col xl={8} lg={12} md={12} sm={12} xs={24}>
					<TrafficRaiseCard/>
				</Col>
				<Col xl={8} lg={12} md={12} sm={12} xs={24}>
					<TrafficRaiseCard/>
				</Col>
			</Row>
		</div>
	);
};

export default Dashboard;

