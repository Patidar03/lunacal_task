import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineQuestionCircle } from "react-icons/ai"

const GalleryWidget = () => {

    const [value, setValue] = useState([10, 200, 390, 580]);
    const [count, setCount] = useState(0);

    const handleChange = (type) => {
        if (type === "incr" && count == -1) {
            setValue(prev => prev.map((val) => val + 170));
            setCount(count + 1);
        } else if (type === "decr" && count == 0) {
            setValue(prev => prev.map((val) => val - 170));
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className=" w-full relative h-[330px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] ">
                <div className=" rounded-[23px] w-[614px] h-[62px] flex justify-between items-center m-auto relative top-[17px]">
                    <button className="bg-[rgba(23,23,23,1)] w-[149px] h-[62px] rounded-[20px] text-[20px] font-[500] text-white">Gallery</button>
                    <div className="flex gap-3 items-center">
                        <span className="shadow-[9px_10px_7.1px_0px_rgba(0,0,0,0.4)] bg-[rgba(255,255,255,0.03)] rounded-full">
                            <button className="text-white rounded-full w-[131.23px] h-[46px] shadow-[inset_0_3.26px_3.26px_0px_rgba(255,255,255,0.15)] font-[800] text-[12px]">+ ADD IMAGE</button>
                        </span>
                        <div className="ml-2 flex items-center">
                            <button className={`w-[45px] h-[45px] ml-2 rounded-full text-[rgba(111,120,124,1)] bg-gradient-to-r from-[rgba(48,52,57,1)] to-[rgba(22,23,24,1)] text-lg shadow-[-5px_-3px_30px_-10px_rgba(150,190,231,1)] ${count !== 0 ? 'bg-gradient-to-r from-[rgba(48,52,57,1)] to-[rgba(22,23,24,1)]' : 'bg-gradient-to-r from-[#7d9dc2] to-[#343e49] text-white'}`} disabled={count === 0} onClick={() => { handleChange("incr") }}><AiOutlineArrowLeft className="m-auto" /></button>
                            <button className={`w-[45px] h-[45px] ml-2 rounded-full text-[rgba(111,120,124,1)] bg-gradient-to-r from-[rgba(48,52,57,1)] to-[rgba(22,23,24,1)] text-lg shadow-[-5px_-3px_30px_-10px_rgba(150,190,231,1)] ${count !== -1 ? 'bg-gradient-to-r from-[rgba(48,52,57,1)] to-[rgba(22,23,24,1)]' : 'bg-gradient-to-r from-[rgba(136,171,211,1)] to-[rgba(52,62,73,1)] text-white'}`} disabled={count === -1} onClick={() => { handleChange("decr") }}><AiOutlineArrowRight className="m-auto" /></button>
                        </div>
                    </div>

                </div>
                <div className="w-[611px] h-[200px] relative top-[50px] flex items-center text-[20px] text-[#969696] font-[400] leading-[25.2px] m-auto">
                    <span className="relative w-full h-full overflow-hidden">
                        <img src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__" alt="slideImg" className={`w-[170px] h-[150px] absolute top-7 object-cover rounded-[24px] grayscale hover:grayscale-0 transition-all hover:transition-all hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.3)]`} style={{ transform: `translateX(${value[0]}px)` }} />
                        <img src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__" alt="slideImg" className={`w-[170px] h-[150px] absolute top-7 rounded-[24px] grayscale hover:grayscale-0 transition-all hover:transition-all hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.3)]`} style={{ transform: `translateX(${value[1]}px)` }} />
                        <img src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__" alt="slideImg" className={`w-[170px] h-[150px] absolute top-7 rounded-[24px] grayscale hover:grayscale-0 transition-all hover:transition-all hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.3)]`} style={{ transform: `translateX(${value[2]}px)` }} />
                        <img src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__" alt="slideImg" className={`w-[170px] h-[150px] absolute top-7 rounded-[24px] grayscale hover:grayscale-0 transition-all hover:transition-all hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.3)]`} style={{ transform: `translateX(${value[3]}px)` }} />
                    </span>
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
            </div>
        </>
    )
}

export default GalleryWidget