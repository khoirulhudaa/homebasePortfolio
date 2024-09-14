import { FaTimes } from "react-icons/fa";

const ModalCertification = ({ image, text, close, title }:{ image?: any; text?: string;close?: any; title?: any }) => {

  return (
    <section className='w-screen h-screen fixed left-0 bottom-0 bg-slate-900 bg-opacity-[0.7] flex items-center justify-center z-[999999999999]'>
      <div className="relative w-[75%] h-max overflow-y-auto bg-white rounded-[14px] pt-10 pb-6 px-6 shadow-lg z-[999999999999]">
        <div className="relative flex w-full h-full">
            <div className="w-1/2 h-full flex">
                <div className="w-full max-h-[330px] mb-4 overflow-hidden border border-slate-400 rounded-lg">
                    <img src={image} alt="image" className="w-full h-full object-contain" />
                </div>
            </div>
            <div className="relative h-full w-1/2 pl-8 pt-8">
                <div onClick={() => close()} className="absolute bg-red-500 text-white right-1 font-normal -top-2 w-[40px] h-[40px] rounded-full p-2 flex items-center justify-center cursor-pointer active:scale-[0.98] hover:brightness-[90%]">
                    <FaTimes />
                </div>
                <h2 className="relative font-bold">{title ?? ''}</h2>
                <p className="text-slate-500 text-[12px] my-3">2024</p>
                <p className="w-[96%] mt-4 text-[15px] leading-loose text-slate-600">{text}</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ModalCertification
