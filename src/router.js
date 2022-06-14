import React, { lazy, Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import {
    Route,
    BrowserRouter as Router,
    Routes,
    useLocation,
    Navigate
  } from "react-router-dom";
import {history} from "./redux/store";
import { PUBLIC_ROUTE } from "./route.constants";
import { Spin } from "antd";
import ErrorBoundary from "./ErrorBoundary";
import Demo from './view/demo';
import Master from './components/layout/default/master'

const publicRoutes = [
    {
      path: "/",
      exact: true,
      component: <Demo/>,
    },
    {
      path: "/demo",
      exact: true,
      component: <Demo/>,
    }
]

export default function AppRoutes() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
      <ErrorBoundary>
            <Suspense fallback={<Spin indicator={antIcon} />}>
            <Router history={history}>
                <Routes>
                    <Route element={<Master/>}>
                        {publicRoutes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} element={route.component}/>
                        ))}
                    </Route>
                </Routes>
          </Router>
            </Suspense>
        </ErrorBoundary>
    )
}