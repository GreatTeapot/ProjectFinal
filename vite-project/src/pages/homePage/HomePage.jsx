import React from "react";
import {HeaderNew} from '@/components/headerNewUser';
import {MainForHome} from '@/components/mains';
import {Footer} from '@/components/footer';

export function HomePage() {
  return(
    <div className="wrapper">
      <HeaderNew/>
      <MainForHome/>
      <Footer/>
    </div>
  )
}