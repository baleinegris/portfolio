import React from 'react';
import ParticlesComponent from '../../particles';

function Resume() {
    return (
        <>
        <ParticlesComponent id='particles' />
        <div className='mt-[140px] w-full flex justify-center'>
            <embed src="CV.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0" className='overflow-hidden' width="1000px" height="1410px" />
        </div>
        </>
    )
}

export default Resume;