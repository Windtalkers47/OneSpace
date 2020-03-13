import React from 'react';
import '../App.css';
import Intro from '../components/Intro'
import Service from '../components/Service'
import Setup from '../components/Setup'
import Client from '../components/Client'
import Nav2 from '../components/Nav/Nav2'
import Bottom from '../components/Bottom'
import Content from '../components/Content'
import Service2 from '../components/Service/Service2'
import Forum from '../components/Forum/Forum'

function Page2() {
    return (
      <div>
        <Nav2 />
        <br></br>
        <br></br>
        <br></br>
        <Service2/>

        <Forum />

        <br></br>
        <br></br>
        <br></br>

        <Bottom/>

        <style>@import url('https://fonts.googleapis.com/css?family=Kanit:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap')</style>
      </div>
    );
  }
  
  export default Page2;
