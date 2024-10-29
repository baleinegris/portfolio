import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TimeProvider } from './TimeProvider';
import * as THREE from 'three';
import CanvasLoader from '../CanvasLoader';

import { WhaleModel } from './ModelFactories/FishModels';

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

// const CoinModel = React.memo(({ path, animations, position, rotation, scale, speed }) => {
//     const modelRef = useRef();
//     const { scene, materials, nodes } = useLoader(GLTFLoader, './3d/Coin.gltf');
 
//     useEffect(() => {
//         // Ensure the materials are correctly applied
//         scene.traverse((child) => {
//             if (child.isMesh) {
//                 child.material = materials[child.material.name];
//             }
//         });
//     }, [scene, materials]);

//     return (
//         <mesh 
//             ref={modelRef}
//             rotation={rotation}
//             position={position}
//         >
//             <primitive object={scene} scale={scale} />
//         </mesh>
//     );
// });

function IntroCanvasNew(){
    return (
        <Canvas
        frameloop='always'
        shadows
        camera={{position : [10, 0, 0], fov: 25, zoom : 1}}
        g={{preserveDrawingBuffer : true}} 
        className='z-[0] absolute top-0'
        style={{position: 'absolute', height: '80%'}}>
            <Suspense fallback={CanvasLoader}>
                <TimeProvider>
                    <ambientLight intensity={1} />
                    <spotLight position={[10, 10, 0]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]}/>
                    <WhaleModel scale={6} position={[0, 0.2, -4]} speed={0.5}/>
                    {/* <PeeperModel scale={20} position={[0.8, 0, -5]} speed={0.5}/>
                    <PenglingModel scale={0.05} position={[1.4, -0.4, -5]} speed={0.6}/>
                    <TriopsModel scale={20} position={[0.2, 0, -5]} speed={0.5}/>
                    <FeatherFishModel scale={20} position={[-0.2, 0, -5]} speed={0.5}/> */}
                    {/* <OrbitControls/> */}
                    {/* <axesHelper />
                    <gridHelper/> */}
                    <CameraSetup />
                </TimeProvider>
            </Suspense>
        </Canvas>
    )
}

export default IntroCanvasNew;