import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Decal, Float, Preload, useTexture, Html, Loader } from '@react-three/drei';
import CanvasLoader from '../../CanvasLoader';

function Ball( { imgUrl, name, setHovered } ){
    const texture = useTexture(imgUrl);
    const [intensity, setIntensity] = useState(0.5);

    return (
        <Float 
            speed={1.75}
            floatIntensity={0.5}
            rotationIntensity={1.5}>
        <>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[0, 0, 0.05]} intensity={intensity}/>
                <mesh castShadow receiveShadow
                    onPointerOver={() => {
                        setHovered(true);
                        setIntensity(1);
                    }} 
                    onPointerOut={() => {
                        setHovered(false);
                        setIntensity(0.5);
                    }}
                >
                <icosahedronGeometry args={[1, 1]}/>
                <meshStandardMaterial 
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal map={texture} position={[0,0,1]} rotation={[2*Math.PI, 0, 6.25]} flatShading/>
                </mesh>
        </>
        </Float>
    );
}

function BallCanvas({ imgUrl, name }){
    const [hovered, setHovered] = useState(false);

    return (
        <div className='flex flex-col items-center'>
        <Canvas
            shadows
            frameloop='always'
            gl={{preserveDrawingBuffer : true}}
            style={{width: '100px', height: '100px'}}
            camera={{position: [0, 0, 2], fov: 50, zoom: 0.6}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}/>
                <Ball imgUrl={imgUrl} name={name} setHovered={setHovered}/>
            </Suspense>
        </Canvas>
        <div className={`ball-name ${hovered ? 'w-[100%] opacity-[100%]' : 'w-0 opacity-[0%]'}`}>{name}</div>
        </div>
    );
}
export default BallCanvas;