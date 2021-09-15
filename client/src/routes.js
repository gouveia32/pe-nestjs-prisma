import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Paciente from "./pages/paciente";
import Schedule from "./pages/schedule";
import "./pages/baseStyles.css";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/pacientes/:id" component={Paciente} />
      <Route path="/schedules" component={Schedule} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
