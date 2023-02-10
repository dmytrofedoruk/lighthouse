import React from 'react';
import {Col, Tabs, Button, Dropdown, Divider, Radio, Table } from "antd";
import { MoreOutlined } from '@ant-design/icons';
// import type { ColumnsType } from 'antd/es/table';

const TabPane = Tabs.TabPane;

const items = [
	{
	  key: '1',
	  label: 'Action 1',
	},
	{
	  key: '2',
	  label: 'Action 2',
	},
  ];

const dataSource = [
	{
	  key: '1',
	  name: 'Mike',
	  age: 32,
	  address: '10 Downing Street',
	},
	{
	  key: '2',
	  name: 'John',
	  age: 42,
	  address: '10 Downing Street',
	},
  ];
  
  const columns = [
	{
	  title: 'First Name',
	  dataIndex: 'name',
	  key: 'name',
	},
	{
	  title: 'Last Name',
	  dataIndex: 'name',
	  key: 'name',
	},
	{
	  title: 'Email',
	  dataIndex: 'age',
	  key: 'age',
	},
	{
	  title: 'Status',
	  dataIndex: 'address',
	  key: 'address',
	},
	{
	  title: 'Created ',
	  dataIndex: 'address',
	  key: 'address',
	},
	{
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
            <Dropdown menu={{ items }}>
              <a style={{color: "black"}}>
            	<MoreOutlined style={{fontSize: "18px"}}/>
              </a>
            </Dropdown>
        ),
    },
  ];

  const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
	  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record) => ({
	  disabled: record.name === 'Disabled User',
	  // Column configuration not to be checked
	  name: record.name,
	}),
  };

const UserManagment = () => {

    const callback = (key) => {
    };

    return (
        <div>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<h1 className='gx-font-weight-semi-bold' style={{fontSize: "30px"}}>User Management</h1>
				<div style={{    width: "14%",marginTop: "20px"}}>
					<Button className="gx-mb-0 design-button" style={{background: "#D3F36B", border: "none", width: "72%"}} htmlType="button">
						+ New User
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

			<Table  
				rowSelection={{ type: 'checkbox', ...rowSelection,}} 
				dataSource={dataSource} columns={columns} 
			/>
        </div>
    );
}

export default UserManagment;