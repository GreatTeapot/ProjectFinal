import React from "react";
import {HeaderOld} from '../components/headerOurUser/HeaderOld';
import {MainForMain} from '../components/mains/MainForMain';
import {Footer} from '../components/footer/Footer';

export function MainOurUserPage() {
  return(
    <div className="wrapper">
      <HeaderOld/>
      <MainForMain/>
      <Footer/>
    </div>
  )
}