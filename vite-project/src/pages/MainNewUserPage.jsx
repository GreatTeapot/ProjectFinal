import React, { Component } from 'react';
import HeaderNew from '../components/headerNewUser/HeaderNew';
import MainForMain from '../components/mains/MainForMain';
import Footer from '../components/footer/Footer';

export default class MainNewUserPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <HeaderNew/>
        <MainForMain/>
        <Footer/>
      </div>
    )
  }
}
