import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch, Routes } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Demo from "../../view/demo";
const adminRoutes = [
  {
    path: "demo",
    component: <Demo/>,
    exact: true,
  }
];

let routes = adminRoutes;

function AppRouter() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <Suspense fallback={<Spin indicator={antIcon} />}>
      <Routes>
        {adminRoutes.map((route, index) => (
          <Route exact={route.exact} key={index} path={`/${route.path}`} element={route.component}/>
        ))}
      </Routes>
    </Suspense>
  );
}

export default (AppRouter)
