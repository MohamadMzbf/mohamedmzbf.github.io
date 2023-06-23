import { Layout,  theme, Typography, Col, Row } from "antd";
import { useState, useRef } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import {FaReact,FaLaravel, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import {SiNestjs, SiTypescript,SiSpringboot, SiGit,SiDocker,SiAmazonaws,SiKubernetes} from 'react-icons/si'
import {TbSql} from 'react-icons/tb'
import { Space, Tag,Tooltip} from 'antd';

 


const {  Text } = Typography;

const {  Content } = Layout;

const style2 = {
  minHeight: 100,

  color: "white",
};

const IconFont = createFromIconfontCN({
  scriptUrl : [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ]
})
const Accueil = () => {
  
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <Content
          style={{
            padding: "20px 20px 20px 20px" ,
            minHeight: windowSize.current[1],
            background: "#171717",
          }}
        >
          <div style={{marginLeft:"150px"}}>
            {/* <Row gutter={[32, 16]}>
              <Col style={style2} span={5}></Col>
              <Col style={style2} span={5}>
                {" "}
              </Col>
              <Col style={style2} span={5}>
                {" "}
              </Col>
              <Col style={style2} span={5}>
                {" "}
              </Col>
            </Row> */}
            <Row gutter={[32, 16]}>
              <Col style={style2} span={20}>
                <Text style={{ color: "white", fontSize: 45 }}>
                  <i>Salam</i>, <br /> Je suis{" "}
                  <b>
                    {" "}
                     <i > Mohamadou FAYE </i>
                  </b>
                  ,
                  <br />
                  Ingénieur Logiciel,Développeur Full Stack
                </Text>
              </Col>
            </Row>
            <Row gutter={[32, 16]}>
              <Col style={style2} span={15}>
                <p style={{ color: "#5e5e61" }}>
                  <i>
                    Développeur React js / Développeur Laravel / Développeur
                    Nest Js
                  </i>
                </p>
              </Col>

              <Col style={style2} span={5}>
                {" "}
              </Col>
            </Row>
            <Row gutter={[32, 16]}>
              <Space size={[8, 16]} wrap>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Javascript">
                    <IconFont style={{ fontSize: 50, color: "white" }} type="icon-javascript" />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Nest Js" color="#000000">
                    <SiNestjs style={{ fontSize: 35, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Java" color="#000000">
                    <IconFont style={{ fontSize: 25, color: "white" }}
                      type="icon-java" />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Python" color="#000000">
                    <IconFont style={{ fontSize: 25, color: "white" }} type="icon-python" />
                  </Tooltip>
                </Tag>




                {/*  <Tag style={{ boxShadow:"2px 2px #000000"}}  >
      <SiNestjs style={{fontSize:35, color:"white"}} />
    </Tag>
    <Tag style={{ boxShadow:"2px 2px #fadb14"}}  >
    
    </Tag>
    <Tag style={{ boxShadow:"2px 2px #f5222d"}}  >
    
    </Tag>
    <Tag style={{ boxShadow:"2px 2px #002c8c"}}  >
     
    </Tag> */}

                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="React" color="#000000">
                    <FaReact style={{ fontSize: 40, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Laravel" color="#000000">
                    <FaLaravel style={{ fontSize: 50, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="HTML" color="#000000">
                    <FaHtml5 style={{ fontSize: 20, color: "white" }} />
                  </Tooltip>
                </Tag>


              </Space>
            </Row>


            <Row gutter={[32, 16]}>

              <Space size={[8, 16]} wrap>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Sql" color="#000000">
                    <TbSql style={{ fontSize: 50, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="CSS" color="#000000">
                    <FaCss3Alt style={{ fontSize: 30, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="TypeScript" color="#000000">
                    <SiTypescript style={{ fontSize: 39, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Spring Boot" color="#000000">
                    <SiSpringboot style={{ fontSize: 27, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Git" color="#000000">
                    <SiGit style={{ fontSize: 25, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Docker" color="#000000">
                    <SiDocker style={{ fontSize: 15, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Amazons" color="#000000">
                    <SiAmazonaws style={{ fontSize: 15, color: "white" }} />
                  </Tooltip>
                </Tag>
                <Tag style={{ boxShadow: "2px 2px #000000" }}>
                  <Tooltip title="Kubernetes" color="#000000">
                    <SiKubernetes style={{ fontSize: 10, color: "white" }} />
                  </Tooltip>
                </Tag>
              </Space>
            </Row>

          </div>
        </Content>
  )
}


export default Accueil;
