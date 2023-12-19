import React, { Component } from 'react';
import HeaderNew from '../components/headerNewUser/HeaderNew';
import MainForHome from '../components/mains/MainForHome';
import Footer from '../components/footer/Footer';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderNew/>
        <MainForHome/>
        <Footer/>
      </div>
    )
  }
}
