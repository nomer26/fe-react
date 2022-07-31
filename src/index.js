/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { MaterialUIControllerProvider } from "./context";
import keycloak from "./keycloak/Keycloak";
import ko from "./locale/ko.json";
import App from "./App";

// Material Dashboard 2 React Context Provider

ReactDOM.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <IntlProvider locale="ko" messages={ko}>
      <BrowserRouter>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </BrowserRouter>
    </IntlProvider>
  </ReactKeycloakProvider>,
  document.getElementById("root")
);
