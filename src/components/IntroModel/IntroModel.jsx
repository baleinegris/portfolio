import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useAnimations } from '@react-three/drei';

import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function IntroModel() {
    const whaleRef = useRef();
    const whaleModel = useLoader(GLTFLoader, './3d/glow_whale-v2/glow_whale.gltf');
    const { actions, names } = useAnimations(whaleModel.animations, whaleRef);
    
    useEffect(() => {
        if (actions && names.length > 0) {
            actions[names[0]].play();
        }
    }, [actions, names]);

    useFrame((clock) => {
        whaleRef.current.position.x -= 0.002;
    });

    return (
        <mesh 
            ref={whaleRef}
            rotation={[-0.5, -0.1, 0.3]}
            position={[1.2, 0.2, 0]}
        >
            <primitive object={whaleModel.scene} scale={3} />
        </mesh>
    );
}
function IntroCanvas(){
    return (
        <Canvas
        frameloop='always'
        shadows
        camera={{position : [10, 2, 10], fov: 25, zoom : 8}}
        g={{preserveDrawingBuffer : true}} 
        className='z-[0] absolute top-0'
        style={{position: 'absolute'}}>
            <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 0]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <IntroModel/>
            </Suspense>
        </Canvas>
    )
}

export default IntroCanvas;