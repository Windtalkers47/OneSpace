import React from "react"
import './Content.css';

export default function index() {
    return(
        <div className="justify-start container flex flex-col grid-rows-3 px-4 py-2 mx-auto  bg-pink-400">

        {/* <div
        
          className="absolute bottom-0 left-0 z-0  bg-teal-400"
          style={{ width: 720, height: 440, }}
        >
          <img         
            className="z-0 object-contain"
            src="/assets/images/index_BG_setup.png"
            alt=""
          />
        </div> */}
  
       {/* <div
      
        className="relative flex mb-4 bg-gray bg-no-repeat bg-right-top"
        style={{height: 715, }}
      >
        <img         
          className="z-0 object-contain"
          src="/assets/images/index_BG_lead.png"
          alt=""
        />
      </div> */}
      
        <div className="container flex flex-row px-4 mx-auto justify-start bg-teal-400">
          <div className="row">
            <div className="col-md-6 mx-0 my-0 px-0 py-0 bg-orange-400"> 
          {/* <div className="z-40 flex flex-row items-center justify-end w-6/12 col-md-6 bg-red-600 "> */}
            
            <div className="flex flex-col px-4 ">
              <div className="text-6xl font-extrabold not-italic leading-none text-red-500">OneSpace</div>
              
              <div className="font-normal not-italic text-4xl leading-none text-red-500">จัดตั้งขึ้นด้วยความร่วมมือ</div>

              <div className="font-bold not-italic text-lg ">INET</div>
              <div className="font-bold not-italic text-lg ">บริษัท อินเทอร์เน็ต ประเทศไทย จำกัด (มหาชน)</div>

              <div className="font-normal not-italic text-md ">ผู้ให้บริการโครงสร้างพื้นฐานด้านไอซีทีแบบครบวงจรสำหรับธุรกิจ<br></br>
              และผู้ที่ต้องการนำไอซีทีมาเป็นเครื่องมือเพื่อเสริมสร้าง<br></br>
              ความสามารถในการแข่งขันธุรกิจ</div>
              <br></br>

              <div className="font-bold not-italic text-lg ">ENTER Corporation</div>
              <div className="font-bold not-italic text-lg ">บริษัท เอ็นเทอร์คอปอเรชั่น จำกัด</div>
              
              <div className="font-normal not-italic text-md ">เราคือบริษัทที่มุ่งเน้นการทำงานที่มีคุณภาพและต้องมั่นใจว่าลูกค้า<br></br>
              สามารถนำผลงานที่เราส่งมอบไปใช้งานได้และ<br></br>
              มีคุณค่าทางธุรกิจอย่างแท้จริง ผู้มีประสบการณ์จริงในการ<br></br>
              Implement โครงการ Blockchain ให้แก่ภาครัฐและเอกชน
              </div>


            </div>
            </div>
              {/* </div> */}
              
              <div className="col-lg-6 mx-0 my-0 px-0 py-0 bg-green-500"> 
              <div className="w-full ">
                <br></br>
                <br></br>

              <img className="leadgraphi" src="/assets/images/index_coop.png" alt="index_coop"></img>

              </div>
              </div>
            
        </div>
        </div>
      </div>
    );
    
}










