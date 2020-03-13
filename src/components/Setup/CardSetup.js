import React from "react";

export default function CardSetup() {
  return (
    <div className="flex flex-row px-6 py-10 bg-transparent ">
      <div className="flex justify-center align-middle">
        <img
          className="object-contain h-16"
          src="/assets/images/index_setup_icon1.png"
          alt=""
        />
      </div>

      <div className="flex flex-col pl-3">
        <div className="font-bold text-start txt-sm">ติดตั้งที่เครือข่ายของท่าน</div>
        <div className="text-sm font-normal text-start">
        เราสามารถช่วยท่านติดตั้งและดูแลใน สภาพแวดล้อมที่ท่านกำหนด
        </div>
      </div>
      
    </div>
  );
}

