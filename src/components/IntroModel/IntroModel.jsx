import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useAnimations } from '@react-three/drei';

import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function IntroModel() {
    const [whaleDirection, setWhaleDirection] = useState(1);
    const whaleRef = useRef();
    const whaleModel = useLoader(GLTFLoader, './3d/glow_whale-v2/glow_whale.gltf');
    const { actions, names } = useAnimations(whaleModel.animations, whaleRef);
    const [time, setTime] = useState(0);

    
    useEffect(() => {
        if (actions && names.length > 0) {
            actions[names[0]].play();
        }
    }, [actions, names]);

    // useFrame((clock) => {
    //     if (whaleRef.current.position.x <= -4){
    //         whaleRef.current.rotation.y = Math.PI;
    //         setWhaleDirection(-1);
    //         whaleRef.current.position.x = -3.9;
    //         whaleRef.current.rotation.z = 1.2;
    //     }
    //     whaleRef.current.position.x -= 0.008 * whaleDirection;
    //     whaleRef.current.rotation.z += 0.001 * whaleDirection;
    //     whaleRef.current.position.y += 0.001 * whaleDirection;

    // });
    useFrame((state, delta) => {
        setTime(prevTime => prevTime + delta);

        // if (whaleRef.current.position.x <= -4 || whaleRef.current.position.x >= 4) {
        //     setWhaleDirection(prevDirection => -prevDirection);
        //     whaleRef.current.rotation.y += Math.PI; // Reverse direction
        // }

        // Sinusoidal movement for natural swimming effect
        whaleRef.current.position.x -= 0.004 * whaleDirection;
        whaleRef.current.position.y = 0.1 * Math.sin(time) + time * 0.001;
        whaleRef.current.rotation.z = 0.1 * Math.sin(time);
    });

    return (
        <mesh 
            ref={whaleRef}
            rotation={[-0.5, -0.1, 0.3]}
            position={[2.5, 0.1, 0]}
        >
            <primitive object={whaleModel.scene} scale={5} />
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
        style={{position: 'absolute', height: '60%'}}>
            <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 0]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <IntroModel/>
                {/* <OrbitControls/>
                <axesHelper />
                <gridHelper/> */}
            </Suspense>
        </Canvas>
    )
}

export default IntroCanvas;