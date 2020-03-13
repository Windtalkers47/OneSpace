import React from "react";

 /* ฟังก์ชั่นใช้ในการ assign ข้อมูลลงบนส่วนของ Card Layer */
export default function CardIntro() {
  return (
      
    <div className="relative flex mb-4 bg-gray bg-no-repeat bg-right-top">
    {/* <div
    
      className="absolute bottom-2 left-0 z-0 "
      style={{ width: 720, height: 300, }}
    >
      <img         
        className="z-0 object-contain"
        src="/assets/images/index_BG_lead.png"
        alt=""
      />
    </div> */}



    <div className="flex flex-row px-6 py-10 bg-transparent ">
        
          
      <div className="flex just1ify-center align-middle">
          
        <img
          className="object-contain h-16"
          src="/assets/images/index_setup_icon1.png"
          alt="index_setup_icon1"
        />
      </div>
      <div className="flex flex-col pl-3">  
        <div className="font-bold text-start txt-sm">ติดตั้งที่เครือข่ายของท่าน</div>
        <div className="text-sm font-normal text-start">
        เราสามารถช่วยท่านติดตั้งและดูแลใน สภาพแวดล้อมที่ท่านกำหนด
        </div>
      </div>
      
    </div>
    </div>
  );
}





