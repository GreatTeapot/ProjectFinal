import React from "react";
import {HeaderNew} from '../components/headerNewUser/HeaderNew';
import {MainForHome} from '../components/mains/MainForHome';
import {Footer} from '../components/footer/Footer';

export function HomePage() {
  return(
    <div className="wrapper">
      <HeaderNew/>
      <MainForHome/>
      <Footer/>
    </div>
  )
}