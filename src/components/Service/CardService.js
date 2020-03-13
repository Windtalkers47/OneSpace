import React from "react";

export default function CardService() {
  return (
    <div className="flex flex-col px-6 py-10 bg-white rounded-lg shadow-xl">
      <img
        className="object-contain h-32"
        src="/assets/images/index_service_icon1.png"
        alt=""
      />
      <div className="pt-8 font-bold text-center txt-sm">ออกแบบและให้คำปรึกษา</div>
      <div className="text-sm font-normal text-center">
        เราช่วยท่านคิดว่า องค์กรของท่านสามารถเอา Blockchain ในตระกูล Hyperledger
        ไปใช้งานได้อย่างไรบ้าง
      </div>
    </div>
  );
}






