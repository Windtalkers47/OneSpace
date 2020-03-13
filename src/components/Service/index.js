import React from "react";
import CardService from "./CardService";

export default function index() {
  return (
    <div className="container flex flex-col grid-rows-3 px-4 py-2 mx-auto ">
      <div className="text-4xl font-bold text-center ">
      สิ่งที่เราให้บริการ
      </div>
      <div className="row">
        <div className="col-md-4">
          <CardService />
        </div>
        <div className="col-md-4">
          
        <div className="flex flex-col px-6 py-10 bg-white rounded-lg shadow-xl">
          <img
            className="object-contain h-32"
            src="/assets/images/index_service_icon2.png"
            alt=""
          />
          <div className="pt-8 font-bold text-center txt-sm">พัฒนาโครงการ</div>
          <div className="text-sm font-normal text-center">
            เราช่วยท่านติดตั้ง เขียน Smart Contract รวมถึง พัฒนาระบบที่เกี่ยวข้องกับโครงการ Blockchain ในตระกูล Hyperledger ของท่าน
          </div>
        </div>


        </div>
        <div className="col-md-4">

          <div className="flex flex-col px-6 py-10 bg-white rounded-lg shadow-xl">
            <img
              className="object-contain h-32"
              src="/assets/images/index_service_icon3.png"
              alt=""
            />
            <div className="pt-8 font-bold text-center txt-sm">ดูแลรักษา Blockchain ของท่าน</div>
            <div className="text-sm font-normal text-center">
              เราช่วยท่านดูแลรักษา Blockchain ขององค์กรท่าน เพื่อลดภาระในการจัดสรรทรัพยากรขององค์กรของท่าน
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

