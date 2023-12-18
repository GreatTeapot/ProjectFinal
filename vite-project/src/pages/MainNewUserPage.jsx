import React from "react";
import {HeaderNew} from '../components/headerNewUser/HeaderNew';
import {MainForMain} from '../components/mains/MainForMain';
import {Footer} from '../components/footer/Footer';

export function MainNewUserPage() {
  return(
    <div className="wrapper">
      <HeaderNew/>
      <MainForMain/>
      <Footer/>
    </div>
  )
}