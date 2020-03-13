import React from "react";
import CardClient from "./CardClient";

export default function index() {
  return (
     <div className="bg-red-500"> {/*กรอบค่าาาากรอบสีแดงฟิ้วๆ */}

      <div className="container flex flex-col px-4 py-8 mx-auto "> {/*ห่อไว้หน่อยก็ดีนะเออ =w= */}
        <div className="flex flex-col text-center">  {/* div topic message จ้า */}
          <p className="text-2xl font-semibold text-white ">
            ลูกค้าโครงการ Hyperledger
          </p>
          <p className="text-2xl text-white">ที่ทีมงานเราเคยมีประสบการณ์</p>
        </div>


          <div className="row">
            <div className="col-md-4">
              
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

            </div>

            <div className="col-md-4">
              
            <div className="flex flex-col px-6 py-10 text-white">
                <div className="flex justify-center">
                  <img
                    className="object-contain w-24 h-24"
                    src="/assets/images/index_client_icon2.png"
                    alt=""
                  />
                </div>
                <div className="pt-8 font-bold text-center txt-sm">
                  Logistics Data Tracking
                </div>
                <div className="text-sm font-normal text-center">
                  ออกแบบการนำ Hyperledger - Blockchain ไปใช้ในการแก้ไขปัญหาการเชื่อมต่อข้อมูลในอุตสาหกรรม Logistics
                </div>
              </div>


            </div>
            <div className="col-md-4">

            <div className="flex flex-col px-6 py-10 text-white">
                <div className="flex justify-center">
                  <img
                    className="object-contain w-24 h-24"
                    src="/assets/images/index_client_icon3.png"
                    alt=""
                  />
                </div>
                <div className="pt-8 font-bold text-center txt-sm">
                  Document Workflow
                </div>
                <div className="text-sm font-normal text-center">
                  ออกแบบการนำ Hyperledger - Blockchain ไปใช้ในการแก้ไขปัญหาการเก็บข้อมูลเอกสารในองค์กร
                </div>
              </div>

            </div>
        </div> {/* ปิด row */}

      </div>
    </div>

  );
}

