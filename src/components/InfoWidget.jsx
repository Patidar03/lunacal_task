import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const InfoWidget = () => {
    const [active, setActive] = useState(0);
    const [value] = useState([0, 201, 402]);
    return (
        <>
            <div className=" w-full h-[316px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] ">
                <div className="bg-[#171717] rounded-[23px] w-[614px] h-[62px] flex items-center m-auto relative top-[17px]">
                    <ul className="flex gap-[6px] w-full m-2 relative">
                        <li>
                            <button className="text-white px-[24px] py-[10px] rounded-[16px] w-[195px] h-[49px] text-center cursor-pointer font-[500] text-[18px] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[rgba(39,39,40,0.1176)] to-[rgba(150,190,231,0.0576)] before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full" onClick={() => setActive(0)}>
                                <span className="relative z-10">About Me</span>
                            </button>
                        </li>
                        <li>
                            <button className=" px-[24px] py-[10px] rounded-[16px] w-[195px] h-[49px] text-center text-[#A3ADB2] cursor-pointer font-[500] text-[18px] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[rgba(39,39,40,0.1176)] to-[rgba(150,190,231,0.0576)] before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full" onClick={() => setActive(1)}>
                                <span className="relative z-10">Experience</span>
                            </button>
                        </li>
                        <li>
                            <button className=" px-[24px] py-[10px] rounded-[16px] w-[195px] h-[49px] text-center text-[#A3ADB2] cursor-pointer font-[500] text-[18px] relative overflow-hidden transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r from-[rgba(39,39,40,0.1176)] to-[rgba(150,190,231,0.0576)] before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full" onClick={() => setActive(2)}>
                                <span className="relative z-10">Recommended</span>
                            </button>
                        </li>
                        <span className={`w-[195px] h-[49px] bg-[#28292F] absolute rounded-[16px] transition-all`} style={{ transform: `translateX(${value[active]}px)` }}></span>
                    </ul>
                </div>
                <div className="w-[611px] h-[175px] relative top-[50px] text-[20px] text-[#969696] font-[400] leading-[25.2px] m-auto">
                    <p className="mb-3">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                    </p>

                    <p>
                        I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                    </p>
                </div>
                <AiOutlineQuestionCircle className="w-[24px] h-[24px] absolute top-[17px] left-2 text-[#A3ADB2]" />
                <div className="grid gap-[1.38px] grid-rows-3 grid-cols-2 w-[20px] absolute top-[146px] left-2">
                    <div className="w-[9px] h-[9px] rounded-[2.33px] bg-[#4A4E54]"></div>
                    <div className="w-[9px] h-[9px] rounded-[2.33px] bg-[#4A4E54]"></div>
                    <div className="w-[9px] h-[9px] rounded-[2.33px] bg-[#4A4E54]"></div>
                    <div className="w-[9px] h-[9px] rounded-[2.33px] bg-[#4A4E54]"></div>
                    <div className="w-[9px] h-[9px] rounded-[2.33px] bg-[#4A4E54]"></div>
                    <div className="w-[9px] h-[9px] rounded-[2.33px] bg-[#4A4E54]"></div>
                </div>
                <div className="w-[8px] h-[64px] absolute top-[111px] bg-gradient-to-b from-[#888989] to-[#4A4E54] rounded-[8px] right-2"></div>
            </div>
        </>
    )
}

export default InfoWidget