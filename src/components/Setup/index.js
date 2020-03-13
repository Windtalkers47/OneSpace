import React from "react";
import CardSetup from "./CardSetup";
import "./Setup.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function index() {
  return (
    <div className="row">


      <img className="bgsetup" src="/assets/images/index_BG_setup.png" alt="index_BG_setup"></img>    
    
      {/* <div
      
        className="absolute bottom-2 left-0 z-0 "
        style={{ width: 720, height: 300, }}
      >
        <img         
          className="z-0 object-contain"
          src="/assets/images/index_BG_setup.png"
          alt=""
        />
      </div> */}
      <div className="container flex row px-4 mx-auto ">


        <div className="z-40 flex flex-row items-center justify-end w-6/12 col-md-6 ">

    
          <div className="flex flex-col px-4">
            <div className="text-2xl ">ในการติดตั้งและดูแล</div>
            <div className="text-3xl font-bold text-red-500">
              Blockchain - Hyperledger ของท่าน
            </div>
            <div className="text-3xl font-bold text-red-500">
              เราสามารถช่วยท่านออกแบบว่า
            </div>
            <div className="text-4xl font-light ">
              ท่านจะเอา Blockchain ไปไว้ที่ใด
            </div>


          </div>
        </div>
        
        <div className="w-6/12 col-md-6">
          <CardSetup />
          
          <div className="flex flex-row px-6 py-10 bg-transparent">
            <div className="flex justify-center align-middle">
              <img
                className="object-contain w-48 h-24 z-0"
                src="/assets/images/index_setup_icon2.png"
                alt=""
              />
            </div>

            <div className="flex flex-col pl-3 z-0">
              <div className="font-bold text-start txt-sm">ติดตั้งบน LinuxOne</div>
              <div className="text-sm font-normal text-start">
              เราลงทุนซื้อเครื่อง LinuxOne ทำให้ท่านสามารถเลือกใช้งาน Hyperledger บนเครื่อง Linux ได้ในกรณีที่ท่าน ต้องการระบบที่มีการรักษาความปลอดภัยสูง
              </div>
            </div>
          </div>

          <div className="flex flex-row px-6 py-10 bg-transparent ">
            <div className="flex justify-center align-middle">
              <img
                className="object-contain w-48 h-24 z-0"
                src="/assets/images/index_setup_icon3.png"
                alt=""
              />
            </div>

            <div className="flex flex-col pl-3 z-0">
              <div className="font-bold text-start txt-sm">ติดตั้งอยู่บน INET Cloud</div>
              <div className="text-sm font-normal text-start">
              ท่านสามารถเลือกติดติ้งและให้เราช่วยดูแล Blockchain บนเครือข่าย INET Cloud ซึ่งเป็นเครือข่ายที่ได้รับรองมาตรฐานต่างๆ เป็นที่น่าเชื่อถือ
              </div>
            </div>
          </div>





        </div>
      </div>



        







    </div>
  );
}

 



