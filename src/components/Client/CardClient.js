import React from "react";
function CardClient() {
  return (
    <div className="flex flex-col px-6 py-10 text-white">
      <div className="flex justify-center">
        <img
          className="object-contain w-24 h-24"
          src="/assets/images/index_client_icon1.png"
          alt=""
        />
      </div>
      <div className="pt-8 font-bold text-center txt-sm">
        Peer to Peer Lending
      </div>
      <div className="text-sm font-normal text-center">
        ออกแบบ พัฒนา และติดตั้งโดยนำ Hyperleder - Blockchain ไปใช้ในโจทย์ Peer
        to Peer Lending เพื่อ Secure สัญญาเงินกู้ระหว่างกัน
      </div>
    </div>
  );
}

export default CardClient
