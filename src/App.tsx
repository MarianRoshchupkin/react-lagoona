import React from 'react';
import './main.global.css';
import {Header} from "./shared/Header";
import {Offers} from "./shared/Offers";
import {AboutUs} from "./shared/AboutUs";
import {Advantages} from "./shared/Advantages";

function AppComponent() {
  return (
    <>
      <Header />
      <Offers />
      <AboutUs />
      <Advantages />
    </>
  );
}

export const App = () =>
  <AppComponent />
;
