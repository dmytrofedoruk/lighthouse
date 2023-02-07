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
			<Tabs defaultActiveKey="1" onChange={callback}>
				<TabPane tab="Lorem" key="1"></TabPane>
				<TabPane tab="Ipsum" key="2"></TabPane>
				<TabPane tab="Dolor" key="3"></TabPane>
			</Tabs>
			<div className='search-bar'>
				<i className="icon icon-search gx-mr-2"/><span className='gx-text-light'>Search</span>
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

