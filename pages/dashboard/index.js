import React from 'react';
import {Card, Tabs} from "antd";

const TabPane = Tabs.TabPane;

const Dashboard = () => {
	const callback = (key) => {
	};

	return (
		<div>
		{/* <Card className="gx-card" title="Basic"> */}
		<h1 className='gx-font-weight-semi-bold' style={{fontSize: "30px"}}>Lorem ipsum dolor</h1>
			<Tabs defaultActiveKey="1" onChange={callback}>
				<TabPane tab="Lorem" key="1"></TabPane>
				<TabPane tab="Ipsum" key="2"></TabPane>
				<TabPane tab="Dolor" key="3"></TabPane>
			</Tabs>
			<span>serach</span>
		{/* </Card> */}
		</div>
	);
};

export default Dashboard;

