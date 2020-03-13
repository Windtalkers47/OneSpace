import React from "react";
import CardService from "./CardService";
import './Service.css';


export default function index() {
  return (
    <div className="container flex flex-no-wrap w-full flex-col grid-rows-3 px-auto py-auto mx-auto">
      <div className="text-5xl font-bold text-center text-red-500">
      ถ้าท่านเป็น
      </div>
        <img
            className="object-contain h-64 w-auto mx-auto"
            src="/assets/images/Contact_lead.png"
            alt="Contact_lead"
          />

            <div className="row">
                <div className="col-md-4">
                
                <div className="grid md:col-gap-1 px-12  ">
                <div className="flex-wrap flex-col px-6 py-10 ">
                  
                  <div className="pt-8 font-bold text-center txt-sm text-3xl uppercase text-color">it manager</div>
                  <div className="text-lg font-normal text-center">
                      ที่ได้รับโจทย์ Blockchain ให้กับลูกค้า
                  </div>
                </div>
                </div>
                </div>

                <div className="col-md-4">
                  
                <div className="grid md:col-gap-1 px-12  "> 
                <div className="flex-wrap flex-col px-6 py-10 ">
                  
                  <div className="pt-8 font-bold text-center txt-sm text-3xl uppercase text-color">ผู้นำองค์กร</div>
                  <div className="text-lg font-normal text-center">
                    กำลังมองหาเทคโนโลยีใหม่ เพื่อนำพาองค์กรของท่าน
                  </div>
                </div>
                </div>


                </div>
                <div className="col-md-4">

                <div className="grid md:col-gap-1 px-12  ">
                <div className="flex-wrap flex-col px-6 py-10 ">
                  
                  <div className="pt-8 font-bold text-center txt-sm text-3xl uppercase text-color">it providers</div>
                  <div className="text-lg font-normal text-center">
                      ผู้ที่กำลังต้องทำโครงการ Blockchain ให้ลูกค้า
                  </div>
                </div>
              </div>

                </div>
              </div>

    </div>
  );
}

 