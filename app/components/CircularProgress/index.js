import React from "react";
import { Spin } from 'antd';

const CircularProgress = ({className}) => <div className={`loader ${className}`}>
   <Spin size="large" />
</div>;
export default CircularProgress;
CircularProgress.defaultProps = {
  className: ''
}
