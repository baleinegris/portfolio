import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Decal, Float, Preload, useTexture, Html } from '@react-three/drei';

function Ball( { imgUrl, name } ){
    const texture = useTexture(imgUrl);
    const [intensity, setIntensity] = useState(0.5);
    const [hovered, setHovered] = useState(false);

    return (
        // <Float 
        //     speed={1.75}
        //     floatIntensity={2}
        //     rotationIntensity={1}>
        <>
                <ambientLight intensity={intensity/2}/>
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
                {hovered && (
                <Html position={[0, 1.2, 0]} center>
                    <div style={{ color: 'white', backgroundColor: 'rgb(0, 0, 0, 0.5)', padding: '2px 5px', borderRadius: '3px', width: 'fit-content', height: 'fit-content', pointerEvents: 'none'}}>
                        {name}
                    </div>
                </Html>
            )}
        </>
        // </Float>
    );
}

function BallCanvas({ imgUrl, name }){
    return (
        <Canvas
            frameloop='demand'
            gl={{preserveDrawingBuffer : true}}
            style={{width: '300px', height: '300px'}}
        >
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false}/>
                <Ball imgUrl={imgUrl} name={name}/>
            </Suspense>
        </Canvas>
    );
}
export default BallCanvas;