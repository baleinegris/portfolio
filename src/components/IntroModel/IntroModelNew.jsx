import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TimeProvider } from './TimeProvider';
import * as THREE from 'three';


import { WhaleModel, PeeperModel, PenglingModel, TriopsModel, FeatherFishModel} from './ModelFactories/FishModels';

function CameraSetup() {
    const { camera } = useThree();

    useEffect(() => {
        camera.position.set(5, -2, 5);
        camera.lookAt(0, 0, 0);
        camera.zoom = 3;
        camera.updateProjectionMatrix();
        }, [camera]);

    return null;
}

function IntroCanvasNew(){
    return (
        <Canvas
        frameloop='always'
        shadows
        camera={{position : [10, 0, 0], fov: 25, zoom : 1}}
        g={{preserveDrawingBuffer : true}} 
        className='z-[0] absolute top-0'
        style={{position: 'absolute', height: '60%'}}>
            <TimeProvider>
            <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 0]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]}/>
                <WhaleModel scale={7} position={[0, 0, -5]} speed={0.35}/>
                <PeeperModel scale={20} position={[0.8, 0, -5]} speed={0.5}/>
                <PenglingModel scale={0.05} position={[1.4, -0.4, -5]} speed={0.6}/>
                <TriopsModel scale={20} position={[0.2, 0, -5]} speed={0.5}/>
                <FeatherFishModel scale={20} position={[-0.2, 0, -5]} speed={0.5}/>
                {/* <OrbitControls/>
                <axesHelper />
                <gridHelper/> */}
                <CameraSetup />
            </Suspense>
            </TimeProvider>
        </Canvas>
    )
}

export default IntroCanvasNew;