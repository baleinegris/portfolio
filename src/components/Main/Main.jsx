import React from 'react';
import './Main.css';
import IntroCanvas from '../IntroModel/IntroModel';
import ParticlesComponent from '../particles';

function Main(){
    return (
        <div id='main' style={{position: 'relative'}}>
        <ParticlesComponent id='particles'/>
        <section className='mt-[200px] w-full h-screen main z-1'>
            <div className='intro pt-[30px] ml-[5%] flex z-[10]'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='rounded-full mt-3 bg-blue-950 w-5 h-5'/>
                    <div className='w-[5px] h-40 line'/>
                </div>
                <div className='text-[30px] ml-3 mt-3 text-white font-bold  w-[40%]'>
                    Hi, I'm <span className='text-cyan-400'>Oscar Heath</span> <br/>
                    <span className='text-blue-300 font-normal'>Aspiring Software Developer studying Computer Science at the University of Toronto </span>
                </div>
            </div>
            <IntroCanvas/>
        </section>
        </div>
    )
}

export default Main;