import { Layout,  theme, Typography, Col, Row } from "antd";
import { useState, useRef } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import {FaReact,FaLaravel, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import {SiNestjs, SiTypescript,SiSpringboot, SiGit,SiDocker,SiAmazonaws,SiKubernetes} from 'react-icons/si'
import {TbSql} from 'react-icons/tb'
 import { Space, Tag,Tooltip ,Divider,Menu} from 'antd';
 import Navbar from '../Components/Navbar'
import Accueil from "./Accueil";
 




const { Title, Text } = Typography;

const { Header, Sider, Content } = Layout;
const style = {
  minHeight: 100,
  background: "black",
  color: "white",
};

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

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (

    <>
    <Navbar />
    <Layout>
      <Sider
        width={250}
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#000000" }}
      >
        <Col span={24}>
          <Row className="gutter-row">
            <Col style={style} span={24}>
              <Title level={1} style={{ textAlign: "center", color: "#d4b106" }}>
                M
              </Title>
              
              {/* <Text
                style={{
                  textAlign: "center",
                  color: "#818182",
                  margin: 6,
                  fontSize: 10,
                }}
              >
                Développeur Full Stack
              </Text> */}
            </Col>
          </Row>
        </Col> 
         <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{background:"black",fontSize:"26"}}
            theme="dark"
            items={[
              {
                key: "1",
                label: "Home",
              },
              {
                key: "2",
                label: "Mes Compétences",
              },
              {
                key: "3",
                label: "Mon Experience",
              },
              {
                key: "4",
                label: "Contact",
              },
              {
                key: "5",
                label: "Blog",
              },
            ]}
     /> 
      </Sider> 
      
      <Layout>
        <Accueil/>
      </Layout>
    </Layout>
    </>
  );
};
export default Home;
