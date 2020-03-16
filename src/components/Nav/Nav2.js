import React from "react";
import './Nav.css';

export default function index() {
    return ( 
            <div className= ""> 
                <img className="conttop mx-auto my-auto px-auto py-auto sm:object-contain md:sm:object-contain lg:sm:object-contain" 
                    src="/assets/images/Contact_top.png" alt="Contact_top"></img>

                {/* <div className="container bg-green-400"> กำหนดให้อยู่เมนูอยู่ในกรอบที่กำหนด */}

                <nav class="flex items-center justify-between flex-wrap p-6 mx-auto my-auto max-h-lg">

                
                <div className="flex flex-col px-auto py-auto mx-auto mr-auto items-center flex-shrink-0">
                    <a href="http://localhost:3000/">
                        <img className="logo w-24 h-24 object-contain" src="/assets/images/logo_oneSpace.png" alt="logo_oneSpace"></img>
                    </a>
                </div>
                
                {/* การทำ Hamburger Menu ใช้ class block แล้วเรียก hidden 640px ขึ้นมาเมื่อขนาดจอเล็กกว่าที่กำหนด */}
                <div className="block lg:hidden ">
                    <button class="navbar-toggler cursor-pointer flex items-center px-3 py-2 border 
                    rounded text-black 
                    border-dark hover:text-white hover:border-white navbar-toggler"
                    // type="button" data-toggle="collapse" data-target="#collapsibleNavbar" /*used to boostrap4 กันลืม*/}
                    >
                        {/* วาดรูป Hamburger Menu  สูง 0.25rem (3 Unit) กว้าง 0.25rem (3 Unit) */}
                        <svg class="fill-current h-3 w-3 navbar-toggler-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>เมนู</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                {/* ทำเมนูชิดขวาใช้ flex จัดการให้อยู่ในกล่องเดียวกันเป็น block */}
                        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                <div className="text-lg lg:flex-grow text-right "> {/*used to navbar-right กันลืม*/}
                                    <a href="http://localhost:3000/" 
                                            className="block mt-auto lg:inline-block lg:mt-0 text-black font-normal hover:text-white mx-auto px-8">บริการ
                                        </a>
                                    
                                    <a href="http://localhost:3000/contact" 
                                            className="block mt-auto lg:inline-block lg:mt-0 text-black font-normal hover:text-white mx-auto px-8">พูดคุยกัน
                                        </a>
                                    
                                </div>
                        </div>


                
                </nav>
            {/* </div> */}

            </div>
            


    );
};
