import { Html, useProgress } from '@react-three/drei';
import React from 'react'

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html>
        <p className='text-white text-[30px]'>{progress} %</p>
        </Html>
    )
}

export default CanvasLoader