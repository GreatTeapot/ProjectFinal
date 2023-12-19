import React, { Component } from 'react';
import HeaderOld from '../components/headerOurUser/HeaderOld';
import MainForMain from '../components/mains/MainForMain';
import Footer from '../components/footer/Footer';
import React, { Component } from 'react'

export default class MainOurUserPage extends Component {
  render() {
    return (
      <div className='wrapper'>
        <HeaderOld/>
        <MainForMain/>
        <Footer/>
      </div>
    )
  }
}
