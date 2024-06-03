import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Circles, Dsikom, Earth, FlowTrush, Geospasial, Git1, Git2, Git3, Git4, JS, Node, OMDB, Reacts, Redux, Square, Square3, SquareLine, Swiftvel, TS, TW, ThreeD, Unipay, Valclass, Weather } from '../Assets'
import '../index.css'

const Homepage: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);

  console.log('test1')
  
  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY >= 60) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);
    
    console.log('test2')
  return (
    <div className='relative min-h-screen overflow-x-hidden bg-[#0d1117] pl-10'>
        
        {/* Nabar */}
        <div className={`fixed left-0 top-0 z-[99999999999] py-[20px] w-[100vw] h-max before:absolute before:left-[62px] before:top-[25px] before:bottom-[-5px] before:w-[54px] before:h-[54px] before:bg-white before:shadow-lg before:shadow-black before:content-["<>"] before:flex before:justify-center before:items-center before:text-slate-800 before:font-bold before:text-[24px] before:rounded-full ${scrolled ? 'bg-[#0d1117]' : 'bg-transparent'}`}>
          <div className='w-full text-slate-300 py-5 pl-[150px] h-[60px]'>
            <ul className='w-[80%] flex items-center justify-between'>
              <a href="#home">
                <li className='mr-10'>Home</li>
              </a>
              <a href="#languages">
                <li className='mr-10'>Languages</li>
              </a>
              <a href="#project">
                <li className='mr-10'>Project web</li>
              </a>
              <a href="#about">
                <li className='mr-10'>About me</li>
              </a>
              <a href="#about">
                <li className='mr-10'>Contact us</li>
              </a>
              <a href="#about">
                <li className='mr-10'>Certification</li>
              </a>
              <a href="#about">
                <li className='mr-10'>Pengalaman</li>
              </a>
            </ul>
          </div>
        </div>
        {/* Akhir navbar */}

        <img src={ThreeD} alt="3D" id='squareDDD' className='absolute opacity-[0.7] z-[1] top-[-200px] right-[-250px] scale-[0.6]' />
       
        {/* Blur light */}
        <div className='w-[100px] h-[1200px] bg-blue-600 blur-[220px] rounded-full fixed z-[999999999999] top-[0px] right-0'></div>
        <div className='w-[100px] h-[1200px] bg-blue-600 blur-[220px] rounded-full fixed z-[999999999999] top-[0px] left-0'></div>
        {/* Akhir Blur light */}
       
        <div className='relative z-[4444] px-16 pb-[80px] w-[100%] h-max border-l-[3px] ml-12 mt-[90px] pt-16 border-white before:absolute before:left-[-30px] before:bottom-[-5px] before:w-[54px] before:h-[54px] before:bg-white before:shadow-lg before:shadow-black before:content-["<>"] before:flex before:justify-center before:items-center before:text-slate-800 before:font-bold before:text-[24px] before:rounded-full'>

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
  
          <div className='absolute top-[-70px] right-0'>
            <img loading='lazy' src={Square} alt="square" className='absolute w-[100%] top-[0px] left-[-404px] rotate-[0deg]' />
            <img loading='lazy' src={Square} alt="square" className='w-[100%] rotate-[180deg]' />
          </div>
          <div className='w-max flex items-center'>
            <p className='rounded-full border border-white text-center px-5 py-2 w-max text-white flex items-center'>Fresh Graduate</p>
          </div>
          <h1 className='mt-4 text-[94px] font-bold leading-normal text-white'>Design & Code: My Front-end Journey</h1>
          <div className='w-max flex items-center overflow-hidden rounded-[20px]'>
            <button className='outline-0 border-white border py-5 w-[400px] rounded-full h-max text-center font-[600] my-7 text-white'>Download Resume</button>
          </div>
        </div>
        
        <div className='relative z-[444] pb-[80px] px-16 pt-4 w-[80%] h-max border-l-[3px] ml-12 border-white before:absolute before:left-[-30px] before:bottom-[-5px] before:w-[54px] before:h-[54px] before:bg-white before:shadow-lg before:shadow-black before:content-["<>"] before:flex before:justify-center before:items-center before:text-slate-800 before:font-bold before:text-[24px] before:rounded-full'>
          <p className='text-slate-400 w-max text-[24px] mt-4'>Muhammad Khoirulhuda a <span className='rounded-full text-black text-[18px] mx-2 px-4 py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white'>#FrontEndDeveloper</span> <span className='rounded-full text-black text-[18px] mx-2 px-4 py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white'>#MERNStack</span> and <span className='rounded-full text-black text-[18px] mx-2 px-4 py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white'>#Freelancer</span></p>
          <div className='w-[80vw] z-40 flex items-center justify-between mt-12'>
            <img loading='lazy' src={Reacts} alt='iconLanguage' className='w-[80px] mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={Node} alt='iconLanguage' className='w-[80px] mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={Redux} alt='iconLanguage' className='w-[80px] mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={TS} alt='iconLanguage' className='w-[80px] mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={TW} alt='iconLanguage' className='w-[80px] mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
            <img loading='lazy' src={JS} alt='iconLanguage' className='w-[80px] mr-14 z-[99999999999] cursor-pointer hover:grayscale-[0%] grayscale-[100%]' />
          </div>
        </div>
        
        <div className='relative z-[4444] pb-[0p] px-16 pt-6 w-[100%] h-max border-l-[3px] ml-12 border-white'>
          <img src={Circles} alt="3D" className='absolute opacity-[0.3] z-[1] top-[-350px] right-[-600px] scale-[0.5]' />
          <h3 className='text-[40px] text-white font-bold'>Portfolio</h3>
          <h2 className='text-[50px] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-400 to-white'>Accelerate innovation</h2>
          <h2 className='text-[46px] text-white w-max flex items-center'>My product in <span className='text-green-500 ml-3 flex items-center'>diskominfo cirebon.</span></h2>
          <div className='w-[92vw] z-40 relative overflow-hidden left-[-100px] border-box p-4 bg-slate-800 mt-16 rounded-[12px] border border-slate-200 h-max'>
            <img src={Dsikom} alt="diskominfo-project" className='rounded-lg' />
          </div>
        </div>

        <div className='relative flex flex-col items-center z-[4444] pt-[180px] pb-[0px] w-[100%] h-max border-l-[3px] ml-12 border-white'>
            <img src={SquareLine} alt="3D" className='absolute opacity-[0.3] z-[1] top-[-150px] right-[-420px] scale-[0.5]' />
            <div className='w-[150px] absolute top-[20px] left-0 h-[300px] '>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt="" />
            </div>
            <div className='relative z-[4444] pb-[0px] px-16 w-[100%] mt-[0px] top-[-45px] h-max ml-24'>
              <div className='w-max mb-3 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                Award for me :)
              </div>
              <h3 className='text-[70px] text-green-500 font-[500]'>Product me</h3>
              <h2 className='text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-400 to-white'>Accelerate innovation</h2>
              <h2 className='text-[30px] text-white w-max flex items-center'>My product in <span className='text-green-500 ml-3 flex items-center'>diskominfo cirebon.</span></h2>
            </div>
            <div className='w-[92vw] z-40 flex flex-col relative p-10 left-[-70px] bg-white mt-[120px] rounded-[12px] border border-slate-200 h-max'>
              <div className='w-full h-full relative flex justify-between text-[20px] leading-loose text-white'>
                <div className='w-[60%]'>
                    <h2 className='text-slate-800 font-bold text-[28px]'>SI GEO</h2>
                    <h3 className='text-slate-600'>GitHub Actions au tomates your build, test, and deployment workflow with simple and secure CI/CD.</h3>
                </div>
                <h3 className='cursor-pointer hover:brightness-[90%] relative top-[-6px] active:scale-[0.99] text-green-700 flex items-center'>SI GEO in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
              </div>
              <div className='w-full relative h-full'>
                <div className='relative left-0 w-full h-[100%] overflow-hidden border border-slate-800 rounded-[16px] mt-8'>
                  <img src={Geospasial} alt="geospasial-project" />
                </div>
              </div>
            </div>
            
            <div className='w-[90vw] flex z-40 flex relative left-[0px] mt-[60px] h-max'>
                <div className='w-[45%] bg-white h-[max] mr-8 p-8 border border-slate-700 rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <h2 className='text-slate-800 font-bold text-[28px]'>Unipay</h2>
                      <h3 className='text-[17px] text-slate-600'>GitHub Actions au tomates your build, test, and deployment workflow with simple and secure CI/CD.</h3>
                    </div>
                    <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-green-700 relative top-[-6px] flex items-center'>Unipay in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[40px] border p-2 border-slate-800'>
                    <img src={Unipay} alt="unipay-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
                <div className='w-[45%] bg-white h-[max] p-8 relative border border-slate-700 rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <h2 className='text-slate-800 font-bold text-[28px]'>Swiftvel</h2>
                      <h3 className='text-[17px] text-slate-600'>GitHub Actions au tomates your build, test, and deployment workflow with simple and secure CI/CD.</h3>
                    </div>
                    <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-green-700 relative top-[-6px] flex items-center'>Swiftvel in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[40px] border p-2 border-slate-800'>
                    <img src={Swiftvel} alt="Swiftvel-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
            </div>

            <div className='w-[90vw] flex z-40 flex relative left-[0px] mt-14 h-max'>
                <div className='w-[45%] bg-white h-[max] mr-8 p-8 border border-slate-700 rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <h2 className='text-slate-800 font-bold text-[28px]'>Framework CSS</h2>
                      <h3 className='text-[17px] text-slate-600'>GitHub Actions au tomates your build, test, and deployment workflow with simple and secure CI/CD.</h3>
                    </div>
                    <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-green-700 relative top-[-6px] flex items-center'>Valclass in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[40px] border p-2 border-slate-800'>
                    <img src={Valclass} alt="valclass-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
                <div className='w-[45%] bg-white h-[max] relative p-8 border border-slate-700 rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <h2 className='text-slate-800 font-bold text-[28px]'>FlowTrush</h2>
                      <h3 className='text-[17px] text-slate-600'>GitHub Actions au tomates your build, test, and deployment workflow with simple and secure CI/CD.</h3>
                    </div>
                    <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-green-700 relative top-[-6px] flex items-center'>FlowTrush in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[40px] border p-2 border-slate-800'>
                   <img src={FlowTrush} alt="FlowTrush-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
            </div>

            <div className='w-[90vw] flex z-40 flex relative left-[0px] mt-14 h-max'>
                <div className='w-[45%] bg-white h-[max] mr-8 p-8 border border-slate-700 rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <h2 className='text-slate-800 font-bold text-[28px]'>OMDB API</h2>
                      <h3 className='text-[17px] text-slate-600'>GitHub Actions au tomates your build, test, and deployment workflow with simple and secure CI/CD.</h3>
                    </div>
                    <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-green-700 relative top-[-6px] flex items-center'>Valclass in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[40px] border p-2 border-slate-800'>
                    <img src={OMDB} alt="OMDB-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
                <div className='w-[45%] bg-white h-[max] relative left-[0px] p-8 border border-slate-700 rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <h2 className='text-slate-800 font-bold text-[28px]'>WeatherWeb</h2>
                      <h3 className='text-[17px] text-slate-600'>GitHub Actions au tomates your build, test, and deployment workflow with simple and secure CI/CD.</h3>
                    </div>
                    <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-green-700 relative top-[-6px] flex items-center'>WeatherWeb in here<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[40px] border p-2 border-slate-800'>
                   <img src={Weather} alt="weather-project" className='rounded-md hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
            </div>

        </div>

        <div className='relative flex flex-col z-[4444] pt-[210px] pb-[30px] w-[100%] h-max border-l-[3px] ml-12 border-white'>
          <div className='w-[150px] absolute top-[20px] left-0 h-[300px] '>
            <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="" />
          </div>
          <div className='relative z-[4444] pb-[0px] px-16 w-[100%] mt-[0px] top-[-75px] h-max ml-12'>
            <div className='w-max mb-3 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
              Award for me :)
            </div>
            <h3 className='text-[70px] text-blue-400 font-[500]'>Projects me</h3>
            <h2 className='text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-400 to-white'>Accelerate innovation</h2>
            <h2 className='text-[30px] text-white w-max flex items-center'>My product in <span className='text-blue-400 ml-3 flex items-center'>diskominfo cirebon.</span></h2>
          </div>
          <img src={Square3} alt="3D" className='absolute opacity-[0.3] z-[1] top-[-150px] right-[-450px] scale-[0.5]' />
          <div className='w-[92vw] z-40 relative left-[-37px] bg-white mt-16 rounded-[12px] p-2 border border-slate-200 h-[500px]'>
          </div>
        </div>

        <div className='relative w-[90vw] flex flex-col z-[4444] ml-[48px] h-max border-l-[3px] border-white'>
          
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

          {/* one */}
          <div className='relative flex items-center h-[400px] w-full'>
            <div className='w-[150px] relative h-[200] '>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt="" />
            </div>
            <div className='w-full relative left-[-100px] mt-8'>
              <div className='ml-[120px] mt-[0px] w-max mb-5 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                Frontend Developer
              </div>
              <h2 className='text-[60px] ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[70vw] text-left bg-clip-text'>Internship at <span className='rounded-full px-6 text-[40px] relative top-[-5px] ml-3 py-1 bg-white text-slate-700'>Konstruksi.AI</span></h2>
              <p className='text-white ml-[110px] mt-5 w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <h3 className='cursor-pointer ml-[115px] mt-[30px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max'>Company Profile<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>
          {/* two */}
          <div className='relative flex items-center h-[400px] w-full'>
            <div className='w-[150px] relative h-[200] '>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt="" />
            </div>
            <div className='w-full relative left-[-100px] mt-8'>
              <div className='ml-[120px] mt-[0px] w-max mb-5 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                Web Developer & Data Analysist
              </div>
              <h2 className='text-[60px] ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[70vw] text-left bg-clip-text'>Internship at <span className='rounded-full px-6 text-[40px] relative top-[-5px] ml-3 py-1 bg-white text-slate-700'>Diskominfo</span></h2>
              <p className='text-white ml-[110px] mt-5 w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <h3 className='cursor-pointer ml-[115px] mt-[30px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max'>Company Profile<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>

          <div className='relative flex items-center h-[400px] w-full'>
            <div className='w-[150px] relative h-[200] '>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt="" />
            </div>
            <div className='w-full relative left-[-100px] mt-8'>
              <div className='ml-[120px] mt-[0px] w-max mb-5 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                FullStack Developer
              </div>
              <h2 className='text-[60px] ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[70vw] text-left bg-clip-text'>IT Support and <span className='rounded-full px-6 text-[40px] relative top-[-5px] ml-3 py-1 bg-white text-slate-700'>Freelance</span></h2>
              <p className='text-white ml-[110px] mt-5 w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <h3 className='cursor-pointer ml-[115px] mt-[30px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max'>Show Detail <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>

          <div className='relative w-[92vw] text-left p-16 z-40 relative overflow-hidden left-[-35px] flex flex-col bg-white mt-8 rounded-[12px] border border-slate-200 h-[500px]'>
            <h3 className='text-slate-800 text-[22px] w-[70%] leading-loose'>GitHub Actions automates your build, test, and deployment workflow with simple and secure CI/CD.</h3>
            <div className='my-6 flex items-center w-1/2'>
              <img src={Git2} alt="icon-from-git" className='absolute bottom-0 right-0 rotate-[-20deg] mr-10' title='Starstruck' />
              <img src={Git4} alt="icon-from-git" className='absolute bottom-0 right-[14%] scale-[0.9] rotate-[-20deg] mr-10' title='Pull SHark' />
              <img src={Git1} alt="icon-from-git" className='absolute bottom-[-16%] right-[30%] rotate-[-20deg] mr-10' title='Quickdraw' />
              <img src={Git3} alt="icon-from-git" className='absolute top-0 right-0 rotate-[-20deg]' title='Yolo' />
            </div>
            <div className='w-max h-max text-white cursor-pointer hover:brightness-[90%] active:scale-[0.98] rounded-full mt-6 bg-slate-800 flex items-center justify-center cursor-pointer px-8 py-3'>
              Kunjungi github <FaArrowRight className='ml-3' />
            </div>
          </div>

        </div>

        <div className='relative w-[90vw] flex flex-col z-[4444] pt-8 pb-36 ml-[48px] h-max border-l-[3px] border-white'>
          
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

          <img src={Earth} alt="earth" className='absolute right-[-700px] opacity-[0.2] top-[-200px]' />

          {/* one */}
          <div className='relative flex items-center h-[400px] w-full'>
            <div className='w-[150px] relative h-[200] '>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt="" />
            </div>
            <div className='w-full relative left-[-100px] mt-8'>
              <div className='ml-[110px] mt-[0px] w-max mb-5 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                Web Dev - Tarumanegara University
              </div>
              <h2 className='text-[60px] ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[70vw] text-left bg-clip-text'>Winner 1Th <span className='rounded-full px-6 text-[40px] relative top-[-5px] ml-3 py-1 bg-white text-slate-700'>I/O Fest 2024</span></h2>
              <p className='text-white ml-[110px] mt-5 w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <h3 className='cursor-pointer ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>
          {/* two */}
          <div className='relative flex items-center h-[400px] w-full'>
            <div className='w-[150px] relative h-[200] '>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt="" />
            </div>
            <div className='w-full relative left-[-100px] mt-8'>
              <div className='ml-[110px] mt-[0px] w-max mb-5 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                WDC - Majalengka University
              </div>
              <h2 className='text-[60px] ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[70vw] text-left bg-clip-text'>Winner 2Th <span className='rounded-full px-6 text-[40px] relative top-[-5px] ml-3 py-1 bg-white text-slate-700'>Dies Natalis HIMATF</span></h2>
              <p className='text-white ml-[110px] mt-5 w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <h3 className='cursor-pointer ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>

          <div className='relative flex items-center h-[400px] w-full'>
            <div className='w-[150px] relative h-[200] '>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt="" />
            </div>
            <div className='w-full relative left-[-100px] mt-8'>
              <div className='ml-[110px] mt-[0px] w-max mb-5 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                WDC - STMIK IKMI CIREBON
              </div>
              <h2 className='text-[60px] ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[70vw] text-left bg-clip-text'>Winner 1Th <span className='rounded-full px-6 text-[40px] relative top-[-5px] ml-3 py-1 bg-white text-slate-700'>IKMIMATCH</span></h2>
              <p className='text-white ml-[110px] mt-5 w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <h3 className='cursor-pointer ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>
         
          <div className='relative flex items-center h-[400px] w-full'>
            <div className='w-[150px] relative h-[200] '>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt="" />
            </div>
            <div className='w-full relative left-[-100px] mt-8'>
              <div className='ml-[110px] mt-[0px] w-max mb-5 border border-white rounded-full text-white flex items-center text-center px-5 py-1'>
                WDC - Poltech Negeri Bali
              </div>
              <h2 className='text-[60px] ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[70vw] text-left bg-clip-text'>Parcitipation <span className='rounded-full px-6 text-[40px] relative top-[-5px] ml-3 py-1 bg-white text-slate-700'>INTECH FEST</span></h2>
              <p className='text-white ml-[110px] mt-5 w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <h3 className='cursor-pointer ml-[115px] mt-[30px] text-[20px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 flex items-center w-max'>_Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
            </div>
          </div>

        </div>

        <footer className='relative w-full text-white pb-16 px-16 before:absolute before:left-[22px] before:w-[54px] before:h-[54px] before:bg-white before:shadow-lg before:shadow-black before:content-["<>"] before:flex before:justify-center before:items-center before:text-purple-500 before:font-bold before:text-[24px] before:rounded-full'>
          <div className='ml-12'>
            <p className='w-[80%] leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, in assumenda! Reprehenderit laboriosam repudiandae facere reiciendis nihil. Nesciunt, accusantium facere!</p>
            <p className='rounded-full text-black mt-8 text-[18px] px-4 py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white w-max'>2024 at the new portofolio</p>
          </div>
        </footer>

    </div>
  )
}

export default Homepage
