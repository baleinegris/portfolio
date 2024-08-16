import React, { createContext, useContext, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
    const timeRef = useRef(0);

    useFrame((state, delta) => {
        timeRef.current += delta;
    });

    return (
        <TimeContext.Provider value={timeRef.current}>
            {children}
        </TimeContext.Provider>
    );
};

export const useTime = () => useContext(TimeContext);