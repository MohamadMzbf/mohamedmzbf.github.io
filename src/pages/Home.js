import { Layout, Menu, theme, Typography, Col, Divider, Row } from "antd";
import { useState, useRef } from "react";

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

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <Layout>
      <Sider
        width={120}
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#0f0f0f" }}
      >
        <Col span={24}>
          <Row className="gutter-row">
            <Col style={style} span={24}>
              <Title level={1} style={{ textAlign: "center", color: "white" }}>
                M
              </Title>
              <Title
                level={5}
                style={{ textAlign: "center", color: "white", margin: 6 }}
              >
                Mohamadou
              </Title>
              <Text
                style={{
                  textAlign: "center",
                  color: "#818182",
                  margin: 6,
                  fontSize: 10,
                }}
              >
                Développeur Full Stack
              </Text>
            </Col>
          </Row>
        </Col>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: "A propos",
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
              key: "4",
              label: "Blog",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            padding: 24,
            minHeight: windowSize.current[1],
            background: "#171717",
          }}
        >
          <div>
            <Row gutter={[32, 16]}>
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
            </Row>
            <Row gutter={[32, 16]}>
              <Col style={style2} span={20}>
                <Text style={{ color: "white", fontSize: 45 }}>
                  <i>Salam</i>, <br /> Je suis{" "}
                  <b>
                    {" "}
                    <i>Mohamadou FAYE</i>
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
              <Col style={style2} span={5}></Col>
              <Col style={style2} span={10}></Col>

              <Col style={style2} span={5} />
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
