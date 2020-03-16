import React from "react"
import './Bottom.css';


export default function index(){
    return(
        <div className="flex  flex-row px-4 mx-auto m-0">

        <div className="row"> {/* ทำแถวแบ่งส่วนแรก column 4-4-4 =12 XD */}


        {/*  โดยปกติแล้วทุกครั้งการเขียน react มันยังจำเป็นต้องใช้ตัวแปลงโค้ด JSX
        เพื่อให้สามารถแสดงผลบน Browser ได้ ซึ่งอาจจะใช้ตัว Babel เข้ามาช่วย
        ในการแปลง หลังจาก return ( ...<div/>); นั้นไม่ได้หมายความว่าเราใช้ตัวแปร
        local สำหรับ Tags HTML 
        =====================================================
        ต้องทำการประกาศตัวแปรก่อนแล้วเรียกใช้ Components เอาถึงจะใช้ได้ เช่น
        var div = React.createClass();
        return <div />;

        ถ้าหากเราไม่ใช้ Tags HTML เราต้องเรียกใช้อย่างนี้
        var component = React.createClass();
        return <component />;
        =====================================================

        ปัญหาที่ตามมาทุกครั้งของการเขียนแล้วไม่เรียก component ใน react
        (ชินกับการเขียน html,css แบบเดิมๆ ก็ปรับตัวนิดๆ) ทั้งหมดนี้จะเรียกว่า
        การเขียน lower-case ก็ได้เพื่อให้มันเข้าใจโค้ดได้ในการเขียนแบบ react's component
        
        วิธีแก้ก็ให้เขียใหม่ประมาณนี้
        var component = React.createClass();
        return <component />;

        =====================================================
        การส่งค่ากลับ เช่น
        return <"div">content</"div">;
        หรือ
        return <{Component}>content</{Component}>;

        ศึกษาเอง เขียนเอง ทำเอง ถามชาวบ้านในสิ่งที่ไม่รู้เองโดยซีซ่าครับ T_T

        */}
            <div className="col-md-4 mx-0 xy-0 px-0 py-0 overflow-hidden">
                <iFrame
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.631082210267!2d102.83834281469017!3d16.494207688619635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228bf54b3484c9%3A0x5c2f099195f8b03a!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4reC4tOC4meC5gOC4l-C4reC4o-C5jOC5gOC4meC5h-C4leC4m-C4o-C4sOC5gOC4l-C4qOC5hOC4l-C4oiDguIjguLPguIHguLHguJQgKOC4oeC4q-C4suC4iuC4mSkg4Liq4Liy4LiC4Liy4LiC4Lit4LiZ4LmB4LiB4LmI4LiZ!5e0!3m2!1sth!2sth!4v1583205097494!5m2!1sth!2sth"
                    width="100%"
                    height="100%"
                    frameBorder="0">
                </iFrame>
            </div>

            <div className="col-md-4 mx-0 xy-0 px-0 py-0 overflow-hidden"> {/* ส่วนสอง */}
                <div className="w-screen forceblack ">
                        <div className="flex flex-col px-4">
                            <div className="text-1xl font-bold ">OneSpace Corporation co., Ltd.</div>
                            <div className="text-md font-md text-white">
                            1768 Thai Summit Tower 16th Floor
                            </div>
                            <div className="text-md font-md text-white">
                            New Petchaburi Road, Khwaeng Bang Kapi,
                            </div>
                            <div className="text-md font-md text-white">

                           Khet Huay Khwang, Bangkok 10310
                            </div>

                            <br></br>
                            <div className="text-1xl font-bold ">Official Hours</div>
                            <div className="text-md font-md text-white">
                            Monday - Friday 9.00 AM - 5.00 PM
                            </div>
                        </div>

                </div>
                </div>


                <div className="col-md-4 mx-0 xy-0 px-0 py-0 overflow-hidden"> {/* ส่วนสาม */}
                <div className="w-screen forceblack ">

                        <div className="flex  flex-col px-4">
                            <div className="text-1xl font-bold ">For Business</div>
                            <div className="text-md font-md text-white">
                            hi@onespace.co.th
                            </div>
                            <div className="text-md font-md text-white">
                            02-257-7000 Or 063-197-7583
                            </div>
 
                            <br></br>

                            <div className="text-1xl font-bold ">For Support</div>
                            <div className="text-md font-md text-white">
                            support@onespace.co.th
                            </div>
                            <div className="text-md font-md text-white">
                            063-197-7583
                            </div>
                        </div>

                </div>
                </div>

            </div>
        </div>

    )
}



