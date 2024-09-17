import React, { useState } from 'react'
import { FaArrowRight, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Bali, Cirebon, Earth, Mongodb, FlowTrush, Geospasial, Git1, Git2, Git3, Git4, JS, JWD, Jakarta, Linkedin, Majalengka, Node, OMDB, Reacts, Redux, Square, Square3, SquareLine, Swiftvel, TS, TW, ThreeD, Unipay, Valclass, Weather, HTML, PakYos, Winner, Peserta } from '../Assets'
import ModalCertification from '../Components/ModalCertification'
import '../index.css'

const Homepage: React.FC = () => {

  const [isModal, setIsModal] = useState<boolean>(false);
  const [selectimage, setSelectImage] = useState<string>('');
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  return (
    <div className='relative min-h-screen overflow-x-hidden bg-[#0d1117] lg:pl-10'>
        
        {/* Modal */}
        {
          isModal ? (
            <ModalCertification close={() => setIsModal(false)} title={'I/O Festival 2024 - Web Development'} image={selectimage} text={text} />
          ):
            null
        }

        {/* Humberger */}
        <div onClick={() => setSidebar(true)} className='absolute z-[333] top-6 right-7 lg:hidden shadow-md w-[38px] h-[38px] rounded-md cursor-pointer active:scale-[0.98] hover:brightness-[90%] duration-100 flex flex-col items-center justify-center border border-slate-300'>
          <div className='w-[80%] h-[2px] bg-slate-200 my-1'></div>
          <div className='w-[80%] h-[2px] bg-slate-200 my-1'></div>
          <div className='w-[80%] h-[2px] bg-slate-200 my-1'></div>
        </div>

        {/* Sidebar */}
        <div className={`w-[100vw] h-[100vh] bg-white p-7 bg-white z-[9099999] fixed top-0 ${sidebar ? 'left-0 duration-100' : 'left-[-100%] duration-100'}`}>

        </div>


        {/* Nabar */}
        <nav className={`absolute left-0 top-0 z-[999999999] py-[20px] w-max lg:w-[100v] h-max lg:before:absolute lg:before:left-[62px] lg:before:top-[25px] lg:before:bottom-[-5px] lg:before:w-[54px] lg:before:h-[54px] lg:before:bg-white lg:before:shadow-md lg:before:shadow-black lg:before:content-["<>"] lg:before:flex lg:before:justify-center lg:before:items-center lg:before:text-slate-800 lg:before:font-bold lg:before:text-[24px] lg:before:rounded-full bg-transparent`}>

          <div className='w-full flex lg:hidden items-center px-6 justify-between'>
            {/* Title Web */}
            <h2 className='font-bold text-white relative top-1 text-[32px] lg:text-[24px]'>Portfolio</h2>
          </div>

          {/* Sidebar - Mobile only */}
          <div className={`fixed w-[100vw] h-screen overflow-y-auto bg-white block lg:hidden z-[999999] shadow-md p-6 top-0 ${sidebar ? 'right-0 duration-200' : 'right-[-100%] duration-200 ease-in'}`}>
            
            <div onClick={() => setSidebar(false)} className='absolute w-[40px] h-[40px] rounded-lg bg-red-500 text-white flex items-center justify-center cursor-pointer active:scale-[0.98] hover:brightness-[90%] shadow-md top-5 right-6'>
              <FaTimes />
            </div>
            
            <ul className='w-[80%] mt-4 flex flex-col'>
                <a href="#home" className='w-full mb-4 border-b border-b-slate-200'>
                  <li className='py-4' onClick={() => setSidebar(false)}>Home</li>
                </a>
                <a href="#product" className='w-full mb-4 border-b border-b-slate-200'>
                  <li className='py-4' onClick={() => setSidebar(false)}>Product</li>
                </a>
                <a href="#linkedin" className='w-full mb-4 border-b border-b-slate-200'>
                  <li className='py-4' onClick={() => setSidebar(false)}>Linkedin</li>
                </a>
                <a href="#github" className='w-full mb-4 border-b border-b-slate-200'>
                  <li className='py-4' onClick={() => setSidebar(false)}>Github</li>
                </a>
                <a href="#certification" className='w-full mb-4 border-b border-b-slate-200'>
                  <li className='py-4' onClick={() => setSidebar(false)}>Certification</li>
                </a>
                <a href="#experince" className='w-full mb-4 border-b border-b-slate-200'>
                  <li className='py-4' onClick={() => setSidebar(false)}>Pengalaman</li>
                </a>
            </ul>
          </div>

          <div className='lg:flex hidden w-full text-slate-300 py-5 mt-2 pl-[150px] h-[60px]'>
            <ul className='w-[80%] flex items-center justify-between'>
              <a href="#home">
                <li className='mr-10'>Home</li>
              </a>
              <a href="#languages">
                <li className='mr-10'>Languages</li>
              </a>
              <a href="#product">
                <li className='mr-10'>Product</li>
              </a>
              <a href="#linkedin">
                <li className='mr-10'>Linkedin</li>
              </a>
              <a href="#github">
                <li className='mr-10'>Github</li>
              </a>
              <a href="#certification">
                <li className='mr-10'>Certification</li>
              </a>
              <a href="#experince">
                <li className='mr-10'>Pengalaman</li>
              </a>
            </ul>
          </div>
        </nav>
        {/* Akhir navbar */}

        <img src={ThreeD} alt="3D" className='absolute opacity-[0.1] lg:opacity-[0.7] z-[1] top-[70px] lg:top-[-100px] lg:right-[-250px] lg:scale-[0.6]' />
       
        {/* Blur light */}
        <div className='w-[100px] h-[1200px] bg-white blur-[220px] rounded-full fixed z-[9] top-[0px] right-0'></div>
        <div className='w-[100px] h-[1200px] bg-blue-600 blur-[220px] rounded-full fixed z-[9] top-[0px] left-0'></div>
        {/* Akhir Blur light */}
       
        <div id='home' className='relative z-[444] lg:px-16 px-6 pb-0 lg:pb-[80px] w-[94vw] lg:w-[100%] h-max lg:border-l-[3px] lg:lg:ml-12 mt-[50px] lg:mt-[90px] pt-16 border-white lg:before:absolute lg:before:left-[-30px] lg:before:bottom-[-5px] lg:before:w-[54px] lg:before:h-[54px] lg:before:bg-white lg:before:shadow-md lg:before:shadow-black lg:before:content-["<>"] lg:before:flex lg:before:justify-center lg:before:items-center lg:before:text-slate-800 lg:before:font-bold lg:before:text-[24px] lg:before:rounded-full'>
          <div id='asteroid1a'></div>
          <div id='asteroid2a'></div>
          <div id='asteroid3a'></div>
          <div id='asteroid4a'></div>
          <div id='asteroid5a'></div>

          <div id='star1a' className='animate animate-pulse'></div>
          <div id='star2a' className='animate animate-pulse'></div>
          <div id='star3a' className='animate animate-pulse'></div>
          <div id='star4a' className='animate animate-pulse'></div>
          <div id='star5a' className='animate animate-pulse'></div>
          <div id='star6a' className='animate animate-pulse'></div>
          <div id='star7a' className='animate animate-pulse'></div>
  
          <div className='absolute lg:inline hidden top-[-70px] left-0 lg:right-0'>
            <img loading='lazy' src={Square} alt="square" className='absolute w-[100%] top-[0px] lg:left-[-404px] rotate-[0deg]' />
            <img loading='lazy' src={Square} alt="square" className='w-[100%] rotate-[180deg]' />
          </div>
          <div className='w-max flex items-center'>
            <p className='rounded-full border border-white text-center px-5 py-2 w-max text-white flex items-center'>Fresh Graduate</p>
          </div>
          <h1 className='mt-4 text-[35px] lg:text-[94px] font-bold leading-normal text-white'>Design & Code: My Front-end Journey</h1>
          <div className='w-max flex items-center overflow-hidden rounded-[20px]'>
            <button className='outline-0 border-white border py-3 lg:py-5 px-4 lg:px-10 w-max rounded-lg lg:rounded-full h-max text-center font-[600] my-7 text-white'>Download Resume</button>
          </div>
        </div>
        
        <div id='languages' className='lg:flex flex-col hidden relative z-[444] pb-[30px] lg:pb-[80px] px-6 lg:px-16 lg:pt-4 w-[80%] h-max lg:border-l-[3px] lg:ml-12 border-white lg:before:absolute lg:before:left-[-30px] lg:before:bottom-[-5px] lg:before:w-[54px] lg:before:h-[54px] lg:before:bg-white lg:before:shadow-md lg:before:shadow-black lg:before:content-["<>"] lg:before:flex lg:before:justify-center lg:before:items-center lg:before:text-slate-800 lg:before:font-bold lg:before:text-[24px] lg:before:rounded-full'>
          <p className='text-slate-400 lg:flex items-center w-[94%] lg:w-max text-[16px] lg:text-[24px] ml-[10px] mt-4'>Muhammad Khoirulhuda a 
            <div className='flex items-center ml-2'>
              <span className='rounded-full text-black text-[18px] lg:mx-2 px-4 py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white'>#FrontEndDeveloper</span> <span className='rounded-full text-black text-[18px] lg:mx-2 px-4 py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white'>#MERNStack</span> and <span className='rounded-full text-black text-[18px] lg:mx-2 px-4 py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white'>#Freelancer</span>
            </div>
          </p>
          <div className='w-[80vw] z-40 flex items-center lg:flex-no-wrap flex-wrap justify-between mt-12 ml-[10px]'>
            <img loading='lazy' src={Reacts} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={Node} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={Redux} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={TS} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={TW} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={JS} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
          </div>
        </div>

        <div id='product' className='relative flex flex-col items-center z-[4444] mt-[-20px] pt-[0px] pb-[0px] w-[100%] h-max lg:border-l-[3px] ml-0 lg:ml-12 border-white'>
            <img src={SquareLine} alt="3D" className='absolute opacity-[0.3] z-[1] top-[-150px] right-[-420px] scale-[0.5]' />
            <div className='w-[150px] absolute top-[-60px] left-0 h-[300px] lg:inline hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='relative z-[4444] pb-[0px] lg:px-6 lg:px-16 w-[100%] mt-10 lg:mt-[150px] lg:top-[-45px] h-max ml-12 lg:ml-[170px]'>
              <div className='w-max flex items-center'>
                <div className='w-max border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                  My work
                </div>
                <h3 className='text-[30px] lg:text-[32px] ml-5 text-white font-bold'>Portfolio</h3>
              </div>
              <h3 className='text-[40px] lg:flex hidden lg:text-[70px] text-white lg:text-blue-500 font-[500]'>Product me</h3>
              <h2 className='text-[22px] text-white w-max hidden lg:flex items-center'>District level regional <span className='text-blue-500 ml-3 flex items-center'>innovation competition.</span></h2>
            </div>
            <div className='w-[92vw] z-40 flex flex-col relative pb-6 pt-6 px-4 lg:px-8 lg:pt-4 lg:pb-6 lg:mt-10 mt-[30px] lg:p-10 lg:left-[-70px] bg-white mt-[120px] rounded-[12px] border border-slate-200 h-max'>
              <div className='w-full h-full relative flex-col lg:flex justify-between text-[20px] leading-loose text-white'>
                <div className='w-full'>
                  <div className='w-full lg:flex items-center border-b pb-3 border-b-slate-300 justify-between mb-4'>
                    <h2 className='text-slate-800 font-bold text-[26px] lg:text-[28px]'>SI GEO</h2>
                    <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                      <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                        <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                        <p>React</p>
                      </div>
                      <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                        <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                        <p>Node</p>
                      </div>
                      <div className='w-max text-slate-700 flex items-center'>
                        <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                        <p>MongoDB</p>
                      </div>
                    </div>
                  </div>
                  <h3 className='lg:text-[16px] lg:w-[90%] text-[13px] text-slate-600'>Sigeo is an abbreviation for Geographic Information System (GIS), a technology used to gather, store, manipulate, analyze, and visualize location-based or geographic data in Cirebon Regency.</h3>
                </div>
                <Link to={'https://sigeo-admin.vercel.app/'}>
                  <h3 className='cursor-pointer hover:brightness-[90%] relative lg:top-[-6px] active:scale-[0.99] text-[15px] text-[14px] lg:mt-5 mt-3 text-blue-700 flex border border-blue-700 rounded-full lg:my-10 w-max py-2 px-3 items-center'>SI GEO in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                </Link>
              </div>
              <div className='w-full relative h-full'>
                <div className='relative left-0 w-full h-[100%] overflow-hidden border border-slate-800 rounded-[10px] lg:rounded-[16px] mt-6 lg:mt-0'>
                  <img src={Geospasial} alt="geospasial-project" />
                </div>
              </div>
            </div>
            
            <div className='mt-12 lg:mt-20'>
              <h3 className='text-[30px] lg:text-[50px] text-white lg:text-blue-500 font-[500]'>Our Products</h3>
              <h2 className='text-[14px] lg:text-[24px] text-white flex w-max items-center'>District level regional <span className='text-blue-300 ml-3 flex items-center'>innovation competition.</span></h2>
              <div className='w-[90vw] lg:flex flex-col lg:flex-row lg:flex-row z-40 flex relative left-[0px] mt-[40px] lg:mt-[60px] h-max'>
                  <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-8 lg:pt-4 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                    <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                      <div className='w-full'>
                        <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                          <h2 className='text-slate-800 font-bold text-[26px] lg:text-[28px]'>Unipay</h2>
                          <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                          <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                            <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                            <p>React</p>
                          </div>
                          <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                            <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                            <p>Node</p>
                          </div>
                          <div className='w-max text-slate-700 flex items-center'>
                            <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                            <p>MongoDB</p>
                          </div>
                        </div>
                        </div>
                        <h3 className='text-[13px] lg:text-[16px] text-slate-600'>Unipay facilitates students and faculty members to digitally process ordering and payment of fees.</h3>
                      </div>
                      <Link to={'https://unipay-ikmi.vercel.app/auth'}>
                        <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Unipay in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                      </Link>
                    </div>
                    <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                      <img src={Unipay} alt="unipay-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                    </div>
                  </div>
                  <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-8 lg:pt-4 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-slate-800 font-bold text-[26px] lg:text-[28px]'>Swiftvel</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Node</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center'>
                          <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Mongodb</p>
                        </div>
                      </div>
                      </div>
                        <h3 className='text-[13px] lg:text-[16px] text-slate-600'>Swiftvel is a platform for building websites by easily assembling various components (click and add).</h3>
                      </div>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Swiftvel in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </div>
                    <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                      <img src={Swiftvel} alt="Swiftvel-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                    </div>
                  </div>
              </div>
            </div>

            <div className='w-[90vw] lg:flex flex-col lg:flex-row z-40 flex relative left-[0px] mt-[0px] lg:mt-14 h-max'>
              <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-8 lg:pt-4 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-slate-800 font-bold text-[26px] lg:text-[28px]'>Valclass</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={HTML} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>HTML</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center'>
                          <img src={JS} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>JS</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-slate-600'>Valclass is a CSS framework that operates similar to Tailwind CSS and also provides ready-to-use components.</h3>
                    </div>
                    <Link to={'https://valclassui-v1.vercel.app/'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Valclass in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                    <img src={Valclass} alt="valclass-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
                <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-8 lg:pt-4 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative lg:flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-slate-800 font-bold text-[26px] lg:text-[28px]'>Flowtrush</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Node</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center'>
                          <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Mongodb</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-slate-600'>Flowtrush is created similar to Trello, to manage and organize task lists in a structured manner.</h3>
                    </div>
                    <Link to={'https://flowtrush.vercel.app/auth'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>FlowTrush in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                   <img src={FlowTrush} alt="FlowTrush-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
            </div>

            <div className='w-[90vw] lg:flex flex-col lg:flex-row z-40 flex relative left-[0px] mt-0 lg:mt-14 h-max'>
              <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-8 lg:pt-4 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative lg:flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-slate-800 font-bold text-[26px] lg:text-[28px]'>OMDB</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center'>
                          <img src={TW} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Tailwind</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-slate-600'>OMDB is a platform to obtain a list of movies, built using React and utilizing the OMDB API.</h3>
                    </div>
                    <Link to={'https://omdb-api-vite.vercel.app/'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Valclass in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                    <img src={OMDB} alt="OMDB-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
                <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-8 lg:pt-4 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative lg:flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-slate-800 font-bold text-[26px] lg:text-[28px]'>WeatherWeb</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={TW} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Tailwind</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-slate-600'>WeatherWeb is a platform for checking weather conditions in a city, leveraging the API from openweathermap.</h3>
                    </div>
                    <Link to={'https://weather-iota-gilt.vercel.app/'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>WeatherWeb in here<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                   <img src={Weather} alt="weather-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
            </div>

            <div className='w-[90vw] lg:flex flex-col lg:flex-row z-40 flex relative left-[0px] mt-0 lg:mt-14 h-max'>
              <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-8 lg:pt-4 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative lg:flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-slate-800 font-bold text-[26px] lg:text-[28px]'>Puitisy</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center mr-3 lg:mr-4'>
                          <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Node</p>
                        </div>
                        <div className='w-max text-slate-700 flex items-center'>
                          <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Mongodb</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-slate-600'>– A digital space where words and poetic art unite, offering a platform for writers and readers to connect.</h3>
                    </div>
                    <Link to={'https://puitisy.vercel.app/'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Puitisy in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                    <img src={OMDB} alt="OMDB-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>

                <div className='w-full text-white flex items-center justify-center text-[20px] lg:w-[45%] bg-transparent border-dashed border-2 border-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:p-8 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <p>Cooming soon ...</p>
                </div>
            </div>

        </div>

        <div id='linkedin' className='relative flex flex-col z-[4444] pt-12 lg:pt-[130px] lg:pt-[210px] pb-[30px] w-[100%] h-max lg:border-l-[3px] ml-0 lg:ml-12 border-white'>
          <div className='w-[150px] absolute top-[20px] left-0 lg:h-[300px] lg:inline hidden'>
            <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
          </div>
          <div className='relative z-[4444] pb-[0px] px-6 lg:px-16 w-[100%] mt-[0px] lg:top-[-75px] h-max ml-[0px] lg:ml-12'>
            <div className='w-max mb-3 border border-white rounded-full text-white flex lg:ml-0 items-center text-center px-5 py-1'>
              Social Media
            </div>
            <h3 className='text-[40px] lg:text-[70px] text-blue-400 font-[500]'>My linkedin</h3>
            <h2 className='text-[30px] text-white w-max hidden lg:flex items-center'>Short profile, Find out about <span className='text-blue-400 ml-3 flex items-center'>Me.</span></h2>
          </div>
          <img src={Square3} alt="3D" className='absolute opacity-[0.3] z-[1] top-[-150px] right-[-450px] scale-[0.5]' />

          <div className='relative w-[100vw] lg:w-[92vw] mx-auto lg:mx-0 text-left p-4 lg:p-10 z-40 relative overflow-hidden lg:left-[-35px] flex flex-col bg-white mt-8 lg:mt-8 lg:rounded-[12px] border border-slate-200 h-max'>
            <h3 className='text-slate-800 text-[15px] lg:text-[18px] lg:mb-4 w-[94%] lg:w-[90%] leading-loose'>Your LinkedIn profile section showcases your professional background, skills, education, and achievements, providing a comprehensive view of your career and allowing you to connect with other professionals in your field.</h3>
            
            <div className='w-full border border-slate-300 rounded-lg p-4 bg-white mt-5'>
              <div className='w-full border-b border-b-slate-300 pb-3 mb-5'>
                <h2>Recomendation</h2>
              </div>
              <Link to={'https://www.linkedin.com/in/yoshua-gombo/'}>
                <div className='w-full ;g:flex items-center justify-between mb-4'>
                  <div className='lg:flex items-center'>
                    <div className='w-[40px] h-[40px] lg:mb-0 mb-4 rounded-full overflow-hidden mr-3'>
                      <img src={PakYos} alt="foto" />
                    </div>
                    <p>Pak. Yoshua Gombo - <br className='flex lg:hidden' /> <span className='text-slate-400 text-[12px] lg:text-[14px]'>Co-Founder at Konstruksi.AI | Robotics & AI</span></p>
                  </div>
                  <p className='bg-blue-500 text-white text-[14px] rounded-md px-3 w-max lg:mt-0 mt-4 py-[6px]'>Konstruksi.AI</p>
                </div>
              </Link>

              <p className='w-full mt-3 leading-loose text-slate-500 text-[14px] lg:text-[15px]'>
              To whom it may concern:

              Huda worked with us at Konstruksi.AI developing the core main product as a Frontend developer. Although he was an intern, Huda contributed greatly to the team. Huda has an excellent skill related to Frontend development and always completed his tasks in timely manner. He can perform both individually and within a team as well. I recommend him as a Frontend developer and I believe he will be a great asset to any company.
              </p>
            </div>
            
            <Link to={'https://www.linkedin.com/in/muhammad-khoirulhuda-223659207'}>
              <div className='w-max h-max text-white cursor-pointer hover:brightness-[90%] text-[12px] lg:text-[16px] active:scale-[0.98] rounded-full mt-7 lg:mt-16 bg-slate-800 flex items-center justify-center cursor-pointer px-6 lg:px-8 py-3'>
                Look at linkedin <FaArrowRight className='ml-3' />
              </div>
            </Link>
            <img src={Linkedin} alt="linkedin" className='absolute right-4 lg:right-10 bottom-4 lg:bottom-9 w-[6%]' />
          </div>
        </div>

      <div className='relative w-full lg:mt-0 mt-[50px] flex flex-col z-[4444] lg:px-0 border-box lg:ml-[48px] h-max lg:border-l-[3px] border-white'>
          
          <div id='asteroid1b'></div>
          <div id='asteroid2b'></div>
          <div id='asteroid3b'></div>
          <div id='asteroid4b'></div>
          <div id='asteroid5b'></div>
          
          <div id='star1b' className='animate animate-pulse'></div>
          <div id='star2b' className='animate animate-pulse'></div>
          <div id='star3b' className='animate animate-pulse'></div>
          <div id='star4b' className='animate animate-pulse'></div>
          <div id='star5b' className='animate animate-pulse'></div>
          <div id='star6b' className='animate animate-pulse'></div>
          <div id='star7b' className='animate animate-pulse'></div>

          <img src={Earth} alt="earth" className='absolute right-[-700px] opacity-[0.2] top-[-200px]' />

          <div className='relative z-[4444] pb-[0px] px-4 lg:px-16 w-[100%] mt-[0px] lg:mt-20 lg:mb-20 h-max ml-[0px]'>
            <div className='w-max mb-3 border border-white rounded-full text-white flex lg:ml-0 items-center text-center px-5 py-1'>
              Experiences
            </div>
            <h3 className='text-[40px] lg:text-[70px] text-blue-400 font-[500]'>My Intern</h3>
            <h2 className='text-[30px] text-white w-max hidden lg:flex items-center'>Part-time & full-time in my <span className='text-blue-400 ml-3 flex items-center'>Jobs.</span></h2>
          </div>

          {/* one */}
          <div id='experience' className='relative flex lg:px-0 px-4 items-center h-max lg:h-[400px] lg:mt-0 mt-10 lg:pt-0 pt-4 border-y border-y-white w-full'>
            <div className='w-[150px] relative lg:flex hidden h-[200] lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-[-1px] lg:left-[-100px] mt-8'>
              <div className='lg:ml-[120px] mt-[0px] w-max mb-5 border border-white bg-white text-blue-700 rounded-full flex items-center text-center px-5 py-1 shadow-lg'>
                Frontend Developer
              </div>
              <h2 className='text-[24px] lg:text-[60px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>PT. Konstruksi.AI </h2>
              <p className='lg:text-white lg:ml-[110px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <Link to={'https://konstruksi.ai/'}>
                <h3 className='cursor-pointer underline ml-1 lg:ml-[115px] mt-[30px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 text-[20px] flex items-center w-max'>Company Profile<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
              </Link>
            </div>
          </div>
          {/* two */}
          <div className='relative flex items-center h-max lg:px-0 px-4 lg:h-[400px] lg:pt-0 pt-4 w-full'>
            <div className='w-[150px] relative lg:flex hidden h-[200] lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-0 left-[-1px] lg:left-[-100px] mt-8'>
              <div className='lg:ml-[120px] mt-[0px] w-max mb-5 border border-white bg-white text-blue-700 rounded-full flex items-center text-center px-5 py-1 shadow-lg'>
                Web Developer & Data Analysist
              </div>
              <h2 className='text-[24px] lg:text-[60px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>Diskominfo Cirebon </h2>
              <p className='lg:text-white lg:ml-[110px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <Link to={'https://diskominfo.cirebonkab.go.id/'}>
                <h3 className='cursor-pointer underline ml-1 lg:ml-[115px] mt-[30px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 text-[20px] flex items-center w-max'>Company Profile<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
              </Link>
            </div>
          </div>

          <div id='github' className='relative w-[100vw] lg:w-[92vw] text-left p-4 lg:p-10 z-40 relative overflow-hidden left-0 lg:left-[-35px] flex flex-col bg-white mt-8 lg:mb-0 mb-14 lg:rounded-[12px] border border-slate-200 min-h-[284px] lg:min-h-[500px]'>
            <h3 className='text-slate-800 text-[15px] lg:text-[18px] w-[94%] text-left lg:w-[90%] leading-loose'>Your GitHub profile highlights your coding projects, contributions to open-source communities, and technical skills, offering a comprehensive view of your expertise in software development and collaboration within the tech community.</h3>
            
            <div className='w-full my-8 lg:flex justify-between items-center'>
              <div className='w-full lg:mb-0 mb-5 lg:w-[24%] min-h-[300px] p-3 border border-slate-300 rounded-lg'>
                <div className='w-full h-[130px] bg-blue-200 flex justify-center items-center'>
                  <img src={Git1} alt="pull-shark" className='w-[30%]' />
                </div>
                <div className='w-full p-4'>
                  <div className='w-[30px] h-[30px] rounded-full ml-auto flex items-center justify-center cursor-pointer p-1'>
                    <FaArrowRight className='relative text-blue-500 scale-[1.1] rotate-[-35deg]' />
                  </div>
                  <h2>Pull Shark - 2x</h2>
                  <p className='mt-2 text-slate-500 text-[14px] leading-loose'>@khoirulhudaa opened pull requests that have been merged.</p>
                </div>
              </div>
              <div className='w-full lg:mb-0 mb-5 lg:w-[24%] min-h-[300px] p-3 border border-slate-300 rounded-lg'>
                <div className='w-full h-[130px] bg-orange-200 flex justify-center items-center'>
                  <img src={Git2} alt="pull-shark" className='w-[30%]' />
                </div>
                <div className='w-full p-4'>
                  <div className='w-[30px] h-[30px] rounded-full ml-auto flex items-center justify-center cursor-pointer p-1'>
                    <FaArrowRight className='relative text-blue-500 scale-[1.1] rotate-[-35deg]' />
                  </div>
                  <h2>Quickdraw</h2>
                  <p className='mt-2 text-slate-500 text-[14px] leading-loose'>Closing issues or pull requests within 5 minutes after they are opened.</p>
                </div>
              </div>
              <div className='w-full lg:mb-0 mb-5 lg:w-[24%] min-h-[300px] p-3 border border-slate-300 rounded-lg'>
                <div className='w-full h-[130px] bg-yellow-200 flex justify-center items-center'>
                  <img src={Git3} alt="pull-shark" className='w-[30%]' />
                </div>
                <div className='w-full p-4'>
                  <div className='w-[30px] h-[30px] rounded-full ml-auto flex items-center justify-center cursor-pointer p-1'>
                    <FaArrowRight className='relative text-blue-500 scale-[1.1] rotate-[-35deg]' />
                  </div>
                  <h2>Yolo</h2>
                  <p className='mt-2 text-slate-500 text-[14px] leading-loose'>Achievement when you merge a PR without review.</p>
                </div>
              </div>
              <div className='w-full lg:mb-0 mb-5 lg:w-[24%] min-h-[300px] p-3 border border-slate-300 rounded-lg'>
                <div className='w-full h-[130px] bg-purple-300 flex justify-center items-center'>
                  <img src={Git4} alt="pull-shark" className='w-[30%]' />
                </div>
                <div className='w-full p-4'>
                  <div className='w-[30px] h-[30px] rounded-full ml-auto flex items-center justify-center cursor-pointer p-1'>
                    <FaArrowRight className='relative text-blue-500 scale-[1.1] rotate-[-35deg]' />
                  </div>
                  <h2>Starstruck</h2>
                  <p className='mt-2 text-slate-500 text-[14px] leading-loose'>Starstruck: Having a repository with high popularity / a large number of stars.</p>
                </div>
              </div>
            </div>

            <Link to={'https://github.com/khoirulhudaa'}>
              <div className='w-max h-max text-white cursor-pointer hover:brightness-[90%] active:scale-[0.98] rounded-full mt-[-22px] lg:mt-5 bg-slate-800 flex items-center justify-center cursor-pointer px-6 lg:text-[16px] text-[12px] lg:px-8 py-3'>
                Look at github <FaArrowRight className='ml-3' />
              </div>
            </Link>
          </div>

        </div>

        <div className='relative w-[90vw] flex flex-col z-[4444] pt-7 lg:pt-8 pb-5 lg:pb-36 lg:ml-[48px] h-max lg:border-l-[3px] border-white'>
          
          <div id='asteroid1'></div>
          <div id='asteroid2'></div>
          <div id='asteroid3'></div>
          <div id='asteroid4'></div>
          <div id='asteroid5'></div>
          
          <div id='star1' className='animate animate-pulse'></div>
          <div id='star2' className='animate animate-pulse'></div>
          <div id='star3' className='animate animate-pulse'></div>
          <div id='star4' className='animate animate-pulse'></div>
          <div id='star5' className='animate animate-pulse'></div>
          <div id='star6' className='animate animate-pulse'></div>
          <div id='star7' className='animate animate-pulse'></div>

          <img src={Earth} alt="earth" className='absolute right-[-700px] scale-[2] opacity-[0.2] top-[25%]' />

          <div className='relative z-[4444] pb-[0px] px-0 lg:px-16 w-[100%] mt-[0px] lg:mt-20 lg:mb-20 h-max ml-[16px] lg:ml-[0px]'>
            <div className='w-max mb-3 border border-white rounded-full text-white flex lg:ml-0 items-center text-center px-5 py-1'>
              Certificates
            </div>
            <h3 className='text-[40px] lg:text-[70px] text-blue-400 font-[500]'>My Awards</h3>
            <h2 className='text-[30px] text-white w-max hidden lg:flex items-center'>Results from competitions & training.</h2>
          </div>

          {/* one */}
          <div id='certification' className='relative flex items-center lg:px-0 px-4 h-max lg:h-[400px] lg:pt-0 pt-4 lg:mt-0 mt-10 border-y border-y-white w-screen lg:w-full'>
            <div className='w-[150px] relative lg:flex hidden h-[200] lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-[-1px] lg:left-[-100px] mt-8'>
              <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                <img src={Winner} alt="winner-icon" className='w-[30px]' />
                <div className='ml-5 mt-[0px] w-max border border-white bg-white text-blue-700 rounded-full flex items-center text-center px-5 py-1 shadow-lg'>        
                  Web Dev - Untar
                </div>
              </div>
              <h2 className='text-[24px] lg:text-[60px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>2nd Place - National</h2>
              <p className='lg:text-white lg:ml-[110px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>National-level team-based Web Development Competition with a maximum of three members per team in the I/O Festival 2024 at Tarumanegara University, Jakarta.</p>
              <h3 onClick={() => {
                setIsModal(true)
                setSelectImage(Jakarta)
                setText('National-level team-based Web Development Competition with a maximum of three members per team in the I/O Festival 2024 at Tarumanegara University, Jakarta.')
              }} className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>
          {/* two */}
          <div className='relative flex items-center h-max lg:px-0 px-6 lg:h-[400px] lg:pt-0 pt-4 border-b border-b-white w-screen lg:w-full'>
            <div className='w-[150px] relative lg:flex hidden h-[200] lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-[-1px] lg:left-[-100px] mt-8'>
            <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                <img src={Winner} alt="winner-icon" className='w-[30px]' />
                <div className='ml-5 mt-[0px] w-max border border-white bg-white text-blue-700 rounded-full flex items-center text-center px-5 py-1 shadow-lg'>        
                  WDC - UNMA
                </div>
              </div>
              <h2 className='text-[24px] lg:text-[60px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>2nd Place - Public</h2>
              <p className='lg:text-white lg:ml-[110px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>National-level Web Design Competition for Students at the Dies Natalis HMIF event at Majalengka University, Majalengka on May 20, 2024.</p>
              <h3 onClick={() => {
                setIsModal(true)
                setSelectImage(Majalengka)
                setText('National-level Web Design Competition for Students at the Dies Natalis HMIF event at Majalengka University, Majalengka on May 20, 2024.')}}
               className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>

          <div className='relative flex items-center h-max lg:px-0 px-6 lg:h-[400px] lg:pt-0 pt-4 border-b border-b-white w-screen lg:w-full'>
            <div className='w-[150px] relative lg:flex hidden h-[200] lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-[-1px] lg:left-[-100px] mt-8'>
              <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                <img src={Winner} alt="winner-icon" className='w-[30px]' />
                <div className='ml-5 mt-[0px] w-max border border-white bg-white text-blue-700 rounded-full flex items-center text-center px-5 py-1 shadow-lg'>        
                  WDC - IKMI Cirebon
                </div>
              </div>
              <h2 className='text-[24px] lg:text-[60px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>1st Place - Intramural </h2>
              <p className='lg:text-white lg:ml-[110px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>Inter-College Landing Page Web Competition exclusively for STMIK IKMI CIREBON students at the IKMIMATCHCHAMPIONSHIP event from August 18 to 26, 2023.</p>
              <h3 onClick={() => {
                setIsModal(true)
                setSelectImage(Cirebon)
                setText('Inter-College Landing Page Web Competition exclusively for STMIK IKMI CIREBON students at the IKMIMATCHCHAMPIONSHIP event from August 18 to 26, 2023.')}}
               className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>
         
          <div className='relative flex items-center h-max lg:px-0 px-6 lg:h-[400px] lg:pt-0 pt-4 border-b border-b-white w-screen lg:w-full'>
            <div className='w-[150px] relative lg:flex hidden h-[200] lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-[-1px] lg:left-[-100px] mt-8'>
              <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                <img src={Peserta} alt="winner-icon" className='w-[30px]' />
                <div className='ml-5 mt-[0px] w-max border border-white bg-white text-blue-700 rounded-full flex items-center text-center px-5 py-1 shadow-lg'>        
                  WDC - PNB
                </div>
              </div>
              <h2 className='text-[24px] lg:text-[60px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>Participation </h2>
              <p className='lg:text-white lg:ml-[110px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>National-level Web Design Competition for High School Students (SMA/SMK) at INTECHFEST 2020 with the theme "Information and Technology can Support Future Life".</p>
              <h3 onClick={() => {
                setIsModal(true)
                setSelectImage(Bali)
                setText('National-level Web Design Competition for High School Students (SMA/SMK) at INTECHFEST 2020 with the theme "Information and Technology can Support Future Life".')}} className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>
         
          <div className='relative flex items-center h-max lg:px-0 px-6 lg:h-[400px] lg:pt-0 pt-4 w-screen lg:w-full'>
            <div className='w-[150px] relative lg:flex hidden h-[200] lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-[-1px] lg:left-[-100px] mt-8'>
              <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                <img src={Peserta} alt="winner-icon" className='w-[30px]' />
                <div className='ml-5 mt-[0px] w-max border border-white bg-white text-blue-700 rounded-full flex items-center text-center px-5 py-1 shadow-lg'>        
                  Junior Web Dev
                </div>
              </div>
              <h2 className='text-[24px] lg:text-[60px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>VSGA - JWD</h2>
              <p className='lg:text-white lg:ml-[110px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>It's a certification training program for Junior Web Developers based on national competencies and one of the eight academies under the Digital Talent Scholarship (DTS) in 2022.</p>
              <h3 onClick={() => {
                setIsModal(true)
                setSelectImage(JWD)
                setText(`It's a certification training program for Junior Web Developers based on national competencies and one of the eight academies under the Digital Talent Scholarship (DTS) in 2022.`)}} className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>

        </div>

        <footer className='relative w-full text-white lg:pb-16 lg:px-16 lg:before:absolute lg:before:left-[22px] lg:before:w-[54px] lg:before:h-[54px] lg:before:bg-white lg:before:shadow-md lg:before:shadow-black lg:before:content-["<>"] lg:before:flex lg:before:justify-center lg:before:items-center lg:before:text-purple-500 lg:before:font-bold lg:before:text-[24px] lg:before:rounded-full'>
          <div className='lg:ml-12'>
            <p className='w-[94%] text-[12px] lg:flex hidden lg:text-[16px] lg:w-[80%] leading-loose'>Website yang menjadi basecamp untuk semua karya dan pencapaian saya dalam dunia pemrogramman selama ini. Hasil kerja keras dan keyakinan untuk tetap berdedikasi dalam kompetensi tersebut.</p>
            <p className='lg:rounded-full text-black lg:mt-8 text-[16px] lg:text-[18px] px-4 py-3 lg:py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white w-full lg:w-max'>2024 at the new portofolio</p>
          </div>
        </footer>

    </div>
  )
}

export default Homepage