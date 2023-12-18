import React from "react";
import {HeaderNew} from '@/components/headerNewUser';
import {MainForMain} from '@/components/mains';
import {Footer} from '@/components/footer';

export function MainNewUserPage() {
  return(
    <div className="wrapper">
      <HeaderNew/>
      <MainForMain/>
      <Footer/>
    </div>
  )
}