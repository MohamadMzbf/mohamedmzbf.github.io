import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import {  } from 'antd';

const item = {
  type: 'separator', 
  separator: '|',
};

const LeftMenu = ({ mode }) => {
  return (
  /*   <Menu mode={mode} >
      <Menu.Item key="explore">Explore</Menu.Item>
      <Menu.Item key="features">Features</Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu> */

    <Breadcrumb style={{marginTop:"20px", color:"black"}} separator="</>"
    items={[
      {
        href:<a href=""></a>,
        title: <HomeOutlined />,
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      }
    ]}
  />
    
  );
};

export default LeftMenu;
