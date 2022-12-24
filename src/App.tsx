import React from "react";
import "antd/dist/reset.css";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import Pages from "./pages";
const { Header, Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const naviagte = useNavigate();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          onClick={({ key }) => {
            naviagte(key);
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[window.location.pathname]}
          items={[
            { label: "Home", key: "/" },
            { label: "Task1", key: "/task1" },
            { label: "Task2", key: "/task2" },
          ]}
        />
      </Header>

      <Content className="content">
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <Pages />
        </div>
      </Content>
    </Layout>
  );
};

export default App;
