import React from 'react'
import '../Service/Service.css';
import { TextField } from '@material-ui/core';


export default function index() {
    return (
            <div className="container mx-auto flex-wrap w-full">
                <div 
                 className="md:flex-shrink-auto content-start 
                 max-w-auto mx-auto px-6 py-10 
                 bg-white rounded-lg shadow-2xl 
                 justify-start content-center md:w-auto"
                >
                
                <div className="pt-8 font-bold text-center txt-sm text-color text-2xl justify-start content-center">ให้เราช่วยท่านในโจทย์ที่ท่านได้รับ</div>
                <div className="text-sm font-normal text-center text-md justify-start">
                    เรารบกวนขอข้อมูลของท่านเพื่อที่เราจะติดต่อกลับไปโดยไวที่สุด
                </div>

                <div>
                <form className="flex-wrap w-full off ">
                    <TextField id="standard-basic-input" label="ชื่อ นามสกุล" className="off fullWidth" /><br></br><br></br><br></br>
                    <TextField id="standard-basic-input" label="ตำแหน่ง" className="off fullWidth"/><br></br><br></br><br></br>
                    <TextField id="standard-basic-input" label="องค์กร" className="off fullWidth"/><br></br><br></br><br></br>
                    <TextField id="standard-basic-input" label="อีเมลล์" className="off fullWidth"/><br></br><br></br><br></br>
                    <TextField id="standard-basic-input" label="เบอร์โทรศัพท์" className="off fullWidth"/><br></br><br></br><br></br>


                    <TextField
                    id="standard-multiline-static-input" className="off fullWidth"
                    label="ท่านพอจะเล่าโจทย์ของท่านให้พอสังเขปได้หรือไม่"multiline rows="8"
                    />
                </form>
                <br></br>


                {/* <div className="text-sm font-normal text-left text-base forcetext justify-center disabled">
                    ท่านพอจะเล่าโจทย์ของท่านให้พอสังเขปได้หรือไม่
                </div> */}
                
                </div>

                <br></br>

                    <div className="font-bold text-center  rounded-lg ">
                        <button class="button button1">ส่งข้อมูล</button>
                    </div>

                </div>

                <br></br>
                <div className="text-bold font-normal text-center text-md underline">
                    รู้จัก OneSpace ให้มากขึ้น
                </div>

            </div>

    );
}




