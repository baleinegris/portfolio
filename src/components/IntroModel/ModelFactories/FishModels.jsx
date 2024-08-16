import React from "react";
import Model from "./DefaultModelFactory";

function PeeperModel({ position=[ 0, 0, 0 ], rotation=[ 0, 0, 0 ], scale=1, speed=0.3 }) {
    return (
        <Model speed={speed} position={position} rotation={rotation} scale={scale} path='arctic_peeper/arctic_peeper.gltf' animations={['AP_idleSwim_forward']} />
    )
}

function PenglingModel({ position=[ 0, 0, 0 ], rotation=[ 0, 0, 0 ], scale=1, speed=0.3}) {
    return (
        <Model speed={speed} position={position} rotation={rotation} scale={scale} path='pengling/pengling.gltf' animations={['BP_swim_slow']} />
    )
}

function TriopsModel({ position=[ 0, 0, 0 ], rotation=[ 0, 0, 0 ], scale=1, speed=0.3 }) {
    return (
        <Model speed={speed} position={position} rotation={rotation} scale={scale} path='triops/triops.gltf' animations={['Triops_idleSwim']} />
    )
}

function WhaleModel({ position=[ 0, 0, 0 ], rotation=[ 0, 0, 0 ], scale=1, speed=0.3 }) {
    return (
        <Model speed={speed} position={position} rotation={rotation} scale={scale} path='glow_whale/glow_whale.gltf' animations={['move f']} />
    )
}


function FeatherFishModel({ position=[ 0, 0, 0 ], rotation=[ 0, 0, 0 ], scale=1, speed=0.3 }) {
    return (
        <Model speed={speed} position={position} rotation={rotation} scale={scale} path='feather_fish/feather_fish.gltf' animations={['FF2_slowSwim']} />
    )
}

export { PeeperModel, PenglingModel, TriopsModel, WhaleModel, FeatherFishModel };