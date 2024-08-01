import React from 'react';
import './Main.css';
import IntroCanvas from '../IntroModel/IntroModel';

function Main(){
    return (
        <section className='mt-[200px] w-full h-screen main'>
            <div className='intro pt-[30px] ml-[5%] flex z-[10]'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='rounded-full mt-3 bg-blue-950 w-5 h-5'/>
                    <div className='w-[5px] h-40 line'/>
                </div>
                <div className='text-[30px] ml-3 mt-3 text-white font-bold'>
                    Hi, I'm <span className='text-blue-950'>Oscar Heath</span> <br/>
                    <span className='text-blue-300'>Aspiring Software Developer</span>
                </div>
            </div>
            <IntroCanvas/>
        </section>
    )
}

export default Main;