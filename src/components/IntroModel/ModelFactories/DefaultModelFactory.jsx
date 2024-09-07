import React, {useRef, useEffect, useState, Suspense } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';
import { useTime } from '../TimeProvider';
import WebsiteLoader from '../../WebsiteLoader';
/**
 * Default Factory for a 3d model
 * @param path          str path to the gltf of the model from 3d folder
 * @param animations    list of names of animations to play
 * @param position      3d Vector of x, y, z coordinates
 * @param rotation      3d Vector of x, y, z rotation
 * @param scale         int scale of the model
 * @returns             3d model
 */

const Model = React.memo(({ path, animations, position, rotation, scale, speed }) => {
    const modelRef = useRef();
    const time = useTime();

    const model = useLoader(GLTFLoader, `./3d/${path}`);
    const { actions, names } = useAnimations(model.animations, modelRef);

    useEffect(() => {
        if (actions && names.length > 0) {
            animations.forEach(animation => {
                if (actions[animation]) {
                    actions[animation].play();
                } else {
                    console.warn(`Animation ${animation} not found`);
                }
            });
        }
    }, [actions, names, animations]);

    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.position.z += speed * delta;
            if (modelRef.current.position.z > 5) {
                modelRef.current.position.z = -9;
            }
        }
    });

    return (
        <mesh 
            ref={modelRef}
            rotation={rotation}
            position={position}
        >
            <primitive object={model.scene} scale={scale} />
        </mesh>
    );
});

export default Model;