import { Html, useProgress } from '@react-three/drei';
import React from 'react'

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html>
        <p className='width-[200px] height-[200px] bg-red-700'>TEST %</p>
        </Html>
    )
}

export default CanvasLoader