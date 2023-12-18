import React from "react";
import {HeaderOld} from '@/components/headerOurUser';
import {MainForMain} from '@/components/mains';
import {Footer} from '@/components/footer';

export function MainOurUserPage() {
  return(
    <div className="wrapper">
      <HeaderOld/>
      <MainForMain/>
      <Footer/>
    </div>
  )
}