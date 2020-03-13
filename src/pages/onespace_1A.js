import React from 'react';
import '../App.css';
import Intro from '../components/Intro'
import Service from '../components/Service'
import Setup from '../components/Setup'
import Client from '../components/Client'
import Nav from '../components/Nav'
import Bottom from '../components/Bottom'
import Content from '../components/Content'

function Page1() {
    return (
      <div>
        <Nav />
        <Intro />
        <Service />
        <Setup />
        <Client />
        <Content/>
        <Bottom/>

        <style>@import url('https://fonts.googleapis.com/css?family=Kanit:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap')</style>
      </div>
    );
  }
  
  export default Page1;


